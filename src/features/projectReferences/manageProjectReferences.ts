import * as vscode from 'vscode';
import * as path from 'path';
import { CsprojFileQuickPickItem } from '../../models/csprojFileQuickPickItem';
import { CSharpProject } from '../../models/cSharpProject';
import { ReferenceChangeResult } from '../../models/referenceChangeResult';
import { TreeNode } from '../../models/treeNode';
import { CircularReferenceError } from '../../error/circularReferenceError';
import { cSharpProjectFactory } from '../../factories/cSharpProjectFactory';
import { DotnetCommand } from '../../models/dotnetCommand';
import { executeCommand } from '../../utilities/dotnetTerminalOperations';
import { buildProjectReferenceTree } from '.';

async function manageProjectReferences(contextualProjectUri: vscode.Uri): Promise<void> {

    const contextualProject = await cSharpProjectFactory(contextualProjectUri);

    const selectedProjectItems = await showProjectReferenceQuickPick(contextualProject);

    // Menu was closed
    if (!selectedProjectItems) {
        return;
    }

    const selectedProjectUris = selectedProjectItems.map(i => i.uri);
    const referenceChangeResult = getReferenceChangeResult(contextualProject.projectReferenceUris, selectedProjectUris);

    // Selected projects didn't change but Ok was clicked.
    if (!referenceChangeResult.hasChanged) {
        return;
    }

    if (!await isValidReferenceTree(contextualProject, selectedProjectUris)) {
        return;
    }

    updateReferences(contextualProject, referenceChangeResult);
}

async function showProjectReferenceQuickPick(contextualProject: CSharpProject): Promise<CsprojFileQuickPickItem[] | undefined> {

    const availableProjectUris = await getAllProjectUrisInWorkspace(contextualProject.uri);

    if (availableProjectUris.length === 0) {

        vscode.window.showInformationMessage('No other projects found in workspace.');

        return;
    }

    const quickPickItems = getQuickPickItems(contextualProject.projectReferenceUris, availableProjectUris);

    const quickPickOptions: vscode.QuickPickOptions & { canPickMany: true } = {
        canPickMany: true,
        matchOnDetail: true,
        placeHolder: 'Search for project...'
    };

    const selectedProjects = await vscode.window.showQuickPick<CsprojFileQuickPickItem>(quickPickItems, quickPickOptions);

    return selectedProjects;
}

async function getAllProjectUrisInWorkspace(...urisToFilter: vscode.Uri[]): Promise<vscode.Uri[]> {

    const workspaceProjectUris = await vscode.workspace.findFiles('**/*.csproj');

    urisToFilter.forEach(uri => {
        const indexToRemove = workspaceProjectUris.findIndex(u => u.fsPath === uri.fsPath);

        if (indexToRemove === -1) {
            return;
        }

        workspaceProjectUris.splice(indexToRemove, 1);
    });

    return workspaceProjectUris;
}

function getQuickPickItems(selectedUris: vscode.Uri[], availableProjectUris: vscode.Uri[]): CsprojFileQuickPickItem[] {

    const quickPickItems = availableProjectUris.map(uri => {

        const isSelected = selectedUris.some(selectedUri => selectedUri.fsPath === uri.fsPath);

        return uriToQuickPick(uri, isSelected);
    });

    return quickPickItems;
}

function uriToQuickPick(uri: vscode.Uri, picked: boolean = false): CsprojFileQuickPickItem {

    const label = path.parse(uri.fsPath).name;

    const quickPickItem: CsprojFileQuickPickItem = {
        label: label,
        detail: uri.fsPath,
        picked: picked,
        alwaysShow: true,
        uri: uri
    };

    return quickPickItem;
}

function getReferenceChangeResult(initialUris: vscode.Uri[], finalUris: vscode.Uri[]): ReferenceChangeResult {

    const projectUrisToAdd = finalUris.filter(finalUri => !initialUris.some(initialUri => initialUri.fsPath === finalUri.fsPath));

    const projectUrisToRemove = initialUris.filter(initialUri => !finalUris.some(finalUri => finalUri.fsPath === initialUri.fsPath));

    const referenceChangeResult = new ReferenceChangeResult(projectUrisToAdd, projectUrisToRemove);

    return referenceChangeResult;
}

// TODO: JE - This seems to be inconsistent... If A references B and then B tries to reference A, it appears to allow it??? Maybe?
async function isValidReferenceTree(cSharpProject: CSharpProject, selectedProjectUris: vscode.Uri[]): Promise<boolean> {

    if (selectedProjectUris.length === 0) {
        return true;
    }

    const tempCSharpProject: CSharpProject = {
        name: cSharpProject.name,
        uri: cSharpProject.uri,
        rootNamespace: cSharpProject.rootNamespace,
        projectReferenceUris: selectedProjectUris
    };

    tempCSharpProject.projectReferenceUris = selectedProjectUris;

    let projectRootTreeNode = new TreeNode(tempCSharpProject);

    try {
        await buildProjectReferenceTree(projectRootTreeNode);
    }
    catch (e) {
        if (!(e instanceof CircularReferenceError)) {
            throw e;
        }

        vscode.window.showErrorMessage(e.message);

        return false;
    }

    return true;
}

function updateReferences(cSharpProject: CSharpProject, referenceChangeResult: ReferenceChangeResult): void {

    const directoryPath = path.dirname(cSharpProject.uri.fsPath);

    if (referenceChangeResult.projectUrisToRemove.length > 0) {

        const projectPathArguments = referenceChangeResult.projectUrisToRemove.map(u => `"${u.fsPath}"`);

        executeCommand(directoryPath, DotnetCommand.RemoveReference, ...projectPathArguments);
    }

    if (referenceChangeResult.projectUrisToAdd.length > 0) {

        const projectPathArguments = referenceChangeResult.projectUrisToAdd.map(u => `"${u.fsPath}"`);

        executeCommand(directoryPath, DotnetCommand.AddReference, ...projectPathArguments);
    }
}

export { manageProjectReferences };

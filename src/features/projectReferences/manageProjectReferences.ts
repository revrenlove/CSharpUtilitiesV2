import * as vscode from 'vscode';
import * as path from 'path';
import { CsprojFileQuickPickItem } from '../../models/csprojFileQuickPickItem';
import { CSharpProject } from '../../models/cSharpProject';
import { ReferenceChangeResult } from '../../models/referenceChangeResult';
import { TreeNode } from '../../models/treeNode';
import { CircularReferenceError } from '../../error/circularReferenceError';
import cSharpProjectFactory from '../../factories/cSharpProjectFactory';
import { buildProjectReferenceTree } from '.';
import * as dotnetShellOperations from '../../utilities/dotnetShellOperations';
import { CSharpUtilitiesExtensionError } from '../../error/cSharpUtilitiesExtensionError';

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

    // The dotnet CLI _will_ allow you to add circular references, so this 
    //  preemptively checks for that.
    if (!await isValidReferenceTree(contextualProject, selectedProjectUris)) {
        return;
    }

    await updateProjectReferences(contextualProject, referenceChangeResult);
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
// TODO: JE - We need to figure out a unit test around this shit...
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

// TODO: JE - Figure out how to handle output/errors (in conjunction with `executeDotnetCommand(...)`)
async function updateProjectReferences(cSharpProject: CSharpProject, referenceChangeResult: ReferenceChangeResult): Promise<void> {

    if (referenceChangeResult.projectUrisToRemove.length > 0) {

        await removeProjectReferences(cSharpProject.uri, referenceChangeResult.projectUrisToRemove);
    }

    if (referenceChangeResult.projectUrisToAdd.length > 0) {

        await addProjectReferences(cSharpProject.uri, referenceChangeResult.projectUrisToAdd);
    }
}

async function removeProjectReferences(rootProjectUri: vscode.Uri, removedProjectUris: vscode.Uri[]): Promise<void> {

    const progressOptions: vscode.ProgressOptions = {
        location: vscode.ProgressLocation.Notification,
        title: "Removing Projects...",
    };

    const removeProjectReferencesCallback = async (): Promise<dotnetShellOperations.ExecResult> => {
        return await dotnetShellOperations.removeProjectReferences(rootProjectUri, removedProjectUris);
    };

    const result = await vscode.window.withProgress(progressOptions, removeProjectReferencesCallback);

    handleExecResult(result);
}

async function addProjectReferences(rootProjectUri: vscode.Uri, addedProjectUris: vscode.Uri[]): Promise<void> {

    const progressOptions: vscode.ProgressOptions = {
        location: vscode.ProgressLocation.Notification,
        title: "Adding Projects...",
    };

    const addProjectReferencesCallback = async (): Promise<dotnetShellOperations.ExecResult> => {
        return await dotnetShellOperations.addProjectReferences(rootProjectUri, addedProjectUris);
    };

    const result = await vscode.window.withProgress(progressOptions, addProjectReferencesCallback);

    handleExecResult(result);
}

function handleExecResult(result: dotnetShellOperations.ExecResult) {

    if (result.stderr) {
        // TODO: Figure out _exactly_ what to do...
        throw new CSharpUtilitiesExtensionError(result.stderr);
    }

    vscode.window.showInformationMessage(result.stdout);
}

export { manageProjectReferences };

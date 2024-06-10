import * as vscode from 'vscode';
import * as path from 'path';
import { CsprojFileQuickPickItem } from '../../models/csprojFileQuickPickItem';
import { cSharpProjectFactory } from '../../factories/cSharpProjectFactory';
import { CSharpProject } from '../../models/cSharpProject';
import { ReferenceChangeResult } from '../../models/referenceChangeResult';
import { TreeNode } from '../../models/treeNode';
import { buildProjectReferenceTree } from './buildProjectReferenceTree';

async function showProjectReferenceQuickPick(contextualProjectUri: vscode.Uri): Promise<void> {

    // Get all the projects that are in the workspace...

    // for each project in the workspace, 
    //  determine whether or not adding said project as a reference to the contextual project will create a circular reference,
    //  and if so, don't include that in the results....

    // TODO: JE - We are gonna need to performance test this... with like 100 projects
}

async function renameThisFunction(contextualProjectUri: vscode.Uri): Promise<void> {

    const contextualProject = await cSharpProjectFactory(contextualProjectUri);

    const selectedProjectItems = await showProjectReferenceQuickPickOLD(contextualProject);

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

    contextualProject.projectReferenceUris = selectedProjectUris;

    let projectRootTreeNode = new TreeNode(contextualProject);

    projectRootTreeNode = await buildProjectReferenceTree(projectRootTreeNode);







    // try {



    //     // const x = new TreeNode()
    // }
    // catch (e) {

    // }
}

// TODO: JE - Only show projects that WON'T create a circular reference...
async function showProjectReferenceQuickPickOLD(contextualProject: CSharpProject): Promise<CsprojFileQuickPickItem[] | undefined> {

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

// TODO: JE - We might not need to export this function...
// TODO: JE -  RENAME THIS WHOLE FUCKING FILE!!!!!
export { showProjectReferenceQuickPickOLD as showProjectReferenceQuickPick };

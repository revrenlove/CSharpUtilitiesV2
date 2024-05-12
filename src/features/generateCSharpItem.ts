import * as path from 'path';
import * as vscode from 'vscode';
import { TemplateType } from "../templates/TemplateType";
import * as util from '../util';
import { cSharpProjectFactory } from '../factories/cSharpProjectFactory';

// TODO: Rename this regex...
const filenameRegex = new RegExp(`\\${path.sep}[^\\${path.sep}]+$`);

async function generateCSharpItem(templateType: TemplateType, contextualUri: vscode.Uri): Promise<void> {

    let filename = await promptForFilename(templateType);

    if (!filename) { return; }

    const newFileUri = await getNewFileUri(filename, contextualUri);

    if (await fileExists(newFileUri)) {
        throw new Error(`File already exists: ${newFileUri.fsPath}`);
    }

    const namespace = await getFullNamespace(newFileUri);

    vscode.window.showInformationMessage(namespace);

    // Get the namespace

    // generate the template
}

async function promptForFilename(templateType: TemplateType): Promise<string | undefined> {

    const templateTypeName = util.capitalizeFirstLetter(TemplateType[templateType]);

    let placeHolder = `MyAwesome${templateTypeName}`;

    if (templateType === TemplateType.interface) {
        placeHolder = `I${placeHolder}`;
    }

    let filename = await vscode.window.showInputBox({
        "prompt": `Please enter the name of the new ${templateTypeName}...`,
        "placeHolder": placeHolder
    });

    if (!filename) {
        return;
    }

    if (!/\.cs$/.test(filename)) {
        filename += '.cs';
    }

    return filename;
}

async function getNewFileUri(filename: string, contextualUri: vscode.Uri): Promise<vscode.Uri> {

    let newFileDirectoryPath: string;

    const stat = await vscode.workspace.fs.stat(contextualUri);

    if (stat.type === vscode.FileType.Directory) {

        newFileDirectoryPath = contextualUri.fsPath;
    }
    else {
        newFileDirectoryPath = contextualUri.fsPath.replace(filenameRegex, '');
    }

    const newFilePath = path.join(newFileDirectoryPath, filename);
    const newFileUri = vscode.Uri.file(newFilePath);

    return newFileUri;
}

async function fileExists(uri: vscode.Uri): Promise<boolean> {
    try {
        await vscode.workspace.fs.stat(uri);
        return true; // File exists
    } catch (error) {
        if (error instanceof Error && error.message.includes('ENOENT')) {
            return false; // File does not exist
        } else {
            throw error; // Re-throwing the error for the caller to handle
        }
    }
}

async function getFullNamespace(newFileUri: vscode.Uri): Promise<string> {

    const directoryPath = newFileUri.fsPath.replace(filenameRegex, '');
    const directoryUri = vscode.Uri.file(directoryPath);

    const projectFileUri = await getProjectFileUri(directoryUri);

    const cSharpProject = await cSharpProjectFactory(projectFileUri);

    let namespace = cSharpProject.rootNamespace;

    const projectFileDirectoryPath = path.parse(projectFileUri.fsPath).dir;

    if (directoryPath !== projectFileDirectoryPath) {

        const escapedSeparator = path.sep.replace(/\\/g, '\\\\');

        const pathRegex = new RegExp(escapedSeparator, 'g');

        const subNamespace =
            directoryPath
                .replace(projectFileDirectoryPath, '')
                .replace(pathRegex, '.');

        namespace += subNamespace;
    }

    return namespace;

}

interface ReadDirectoryResult {
    name: string;
    fileType: vscode.FileType;
}

async function getProjectFileUri(directoryUri: vscode.Uri): Promise<vscode.Uri> {

    let projectFileUri: vscode.Uri;

    const readDirectoryResults = (await vscode.workspace.fs.readDirectory(directoryUri)).map(r => {
        const result: ReadDirectoryResult = {
            name: r[0],
            fileType: r[1],
        };

        return result;
    });

    const projectFileResult = readDirectoryResults.find(r => /\.csproj$/.test(r.name));

    if (projectFileResult) {
        projectFileUri = vscode.Uri.file(path.join(directoryUri.fsPath, projectFileResult.name));

        return projectFileUri;
    }

    const workspaceFolder = vscode.workspace.getWorkspaceFolder(directoryUri);

    if (workspaceFolder?.uri.fsPath === directoryUri.fsPath) {
        throw new Error("You can only add an item in a C# project folder.");
    }

    const parentDirectoryUri = vscode.Uri.joinPath(directoryUri, '..');

    projectFileUri = await getProjectFileUri(parentDirectoryUri);

    return projectFileUri;
}

export { generateCSharpItem };

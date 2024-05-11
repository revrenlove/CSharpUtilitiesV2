import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { TemplateType } from "../templates/TemplateType";
import * as util from '../util';

// TODO: Rename this regex...
const filenameRegex = new RegExp(`\\${path.sep}[^\\${path.sep}]+$`);

async function generateCSharpItem(templateType: TemplateType, contextualUri: vscode.Uri): Promise<void> {

    let filename = await promptForFilename(templateType);

    if (!filename) { return; }

    const newFileUri = await getNewFileUri(filename, contextualUri);

    if (checkFileExistsSync(newFileUri)) {
        throw new Error(`File already exists: ${newFileUri.fsPath}`);
    }

    const namespace = await getFullNamespace(newFileUri);

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

function checkFileExistsSync(uri: vscode.Uri) {
    try {
        fs.statSync(uri.fsPath);
        return true; // File exists
    } catch (error) {
        if (error instanceof Error && error.message.includes('ENOENT')) {
            return false; // File does not exist
        } else {
            throw error; // Re-throwing the error for the caller to handle
        }
    }
}

async function exists(uri: vscode.Uri): Promise<boolean> {

    // const stats = vscode.workspace.fs.
    // return stats !== undefined && stats !== null;
    // vscode.workspace.fs.acc

    // TODO: JE - This error hits - figure out how to find out if a duplicate file exists without using a try/catch
    throw new Error("Fuck off!");

    // TODO: JE - This try/catch fucks with the threads so that exceptions get swallowed. That's not good.
    // try {
    //     await vscode.workspace.fs.stat(uri);

    //     return true;
    // }
    // catch {
    //     return false;
    // }
}

async function getFullNamespace(newFileUri: vscode.Uri): Promise<string> {

    const projectFileUri = await getProjectFileUri(newFileUri);

    vscode.window.showInformationMessage(`Project File: ${projectFileUri.fsPath}`);

    // const projectFileUri = vscode.Uri.file(projectFilePath);

    // const cSharpProject = await this.cSharpProjectFactory.fromUriAsync(projectFileUri);

    // let namespace = cSharpProject.rootNamespace;

    // const newFileDirectory = contextualDirectoryUri.fsPath;

    // const projectFileDirectory = path.parse(projectFilePath).dir;

    // if (newFileDirectory !== projectFileDirectory) {

    //     const escapedSeparator = path.sep.replace(/\\/g, '\\\\');

    //     const pathRegex = new RegExp(escapedSeparator, 'g');

    //     const subNamespace =
    //         newFileDirectory
    //             .replace(projectFileDirectory, '')
    //             .replace(pathRegex, '.');

    //     namespace += subNamespace;
    // }

    // return namespace;

    return "";
}

interface ReadDirectoryResult {
    name: string;
    fileType: vscode.FileType;
}

async function getProjectFileUri(newFileUri: vscode.Uri): Promise<vscode.Uri> {

    let projectFileUri: vscode.Uri;
    const directoryUri: vscode.Uri = vscode.Uri.joinPath(newFileUri, '..');;

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

    const parentDirectoryPath = directoryUri.fsPath.replace(filenameRegex, '');

    projectFileUri = await getProjectFileUri(vscode.Uri.file(parentDirectoryPath));

    return projectFileUri;
}

export { generateCSharpItem };

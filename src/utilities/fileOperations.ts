import * as path from 'path';
import * as vscode from 'vscode';

const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

async function readFile(uri: vscode.Uri): Promise<string> {

    const fileContentsArray = await vscode.workspace.fs.readFile(uri);

    const fileContents = textDecoder.decode(fileContentsArray);

    return fileContents;
}

async function writeFile(uri: vscode.Uri, fileContents: string): Promise<void> {

    const fileContentsArray = textEncoder.encode(fileContents);

    await vscode.workspace.fs.writeFile(uri, fileContentsArray);
}

// TODO: JE - Maybe make a `uriOperations.ts`?
function getParentDirectoryPath(uri: vscode.Uri): string {
    return path.dirname(uri.fsPath);
}

function getFilename(uri: vscode.Uri): string {
    return path.basename(uri.fsPath);
}

export { readFile, writeFile, getParentDirectoryPath, getFilename };

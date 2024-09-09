import * as path from "path";
import * as vscode from "vscode";

const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

async function fileExists(uri: vscode.Uri): Promise<boolean> {

    try {
        await vscode.workspace.fs.stat(uri);
        return true;
    }
    catch (error) {
        if (error instanceof Error && error.message.includes("ENOENT")) {
            return false;
        }

        throw error;
    }
}

async function readFile(uri: vscode.Uri): Promise<string> {

    const fileContentsArray = await vscode.workspace.fs.readFile(uri);

    const fileContents = textDecoder.decode(fileContentsArray);

    return fileContents;
}

async function writeFile(uri: vscode.Uri, fileContents: string): Promise<void> {

    const fileContentsArray = textEncoder.encode(fileContents);

    await vscode.workspace.fs.writeFile(uri, fileContentsArray);
}

function getParentDirectoryPath(uri: vscode.Uri): string {
    return path.dirname(uri.fsPath);
}

function getPathName(uri: vscode.Uri): string {
    return path.parse(uri.fsPath).name;
}

export {
    fileExists,
    readFile,
    writeFile,
    getParentDirectoryPath,
    getPathName,
};

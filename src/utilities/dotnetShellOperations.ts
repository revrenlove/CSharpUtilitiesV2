import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';
import { DotnetCommand } from '../models/dotnetCommand';
import { getParentDirectoryPath } from './fileOperations';

const execAsync = promisify(exec);

type ExecResult = {
    stdout: string;
    stderr: string;
};

async function addProjectReferences(
    rootProjectUri: vscode.Uri,
    addedProjectUris: vscode.Uri[]): Promise<ExecResult> {

    const directoryPath = getParentDirectoryPath(rootProjectUri);
    const command = DotnetCommand.AddProjectReference;
    const projectPaths = addedProjectUris.map(u => u.fsPath);

    const commandResult = executeDotnetCommand(directoryPath, command, ...projectPaths);

    return commandResult;
}

async function removeProjectReferences(
    rootProjectUri: vscode.Uri,
    removedProjectUris: vscode.Uri[]): Promise<ExecResult> {

    const directoryPath = getParentDirectoryPath(rootProjectUri);
    const command = DotnetCommand.RemoveProjectReference;
    const projectPaths = removedProjectUris.map(u => u.fsPath);

    const commandResult = executeDotnetCommand(directoryPath, command, ...projectPaths);

    return commandResult;
}

async function executeDotnetCommand(
    directoryPath: string,
    dotnetCommand: DotnetCommand,
    ...commandArgs: string[]): Promise<ExecResult> {

    let command = `dotnet ${dotnetCommand}`;

    if (commandArgs && commandArgs.length > 0) {
        command += ` ${commandArgs.join(' ')}`;
    }

    return await execAsync(command, { "cwd": directoryPath });
}

export { executeDotnetCommand, addProjectReferences, removeProjectReferences, ExecResult };

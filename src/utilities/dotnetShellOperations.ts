import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';
import { DotnetCommand } from '../models/dotnetCommand';
import { getParentDirectoryPath } from './fileOperations';
import { CSharpUtilitiesExtensionError } from '../error/cSharpUtilitiesExtensionError';
import { EOL } from 'node:os';

const execAsync = promisify(exec);

type ExecResult = {
    stdout: string;
    stderr: string;
};

async function addProjectReferences(
    targetProjectUri: vscode.Uri,
    addedProjectUris: vscode.Uri[]): Promise<ExecResult> {

    const directoryPath = getParentDirectoryPath(targetProjectUri);
    const command = DotnetCommand.AddProjectReference;
    const projectPaths = addedProjectUris.map(u => u.fsPath);

    const commandResult = await executeDotnetCommand(directoryPath, command, ...projectPaths);

    return commandResult;
}

async function removeProjectReferences(
    targetProjectUri: vscode.Uri,
    removedProjectUris: vscode.Uri[]): Promise<ExecResult> {

    const directoryPath = getParentDirectoryPath(targetProjectUri);
    const command = DotnetCommand.RemoveProjectReference;
    const projectPaths = removedProjectUris.map(u => u.fsPath);

    const commandResult = await executeDotnetCommand(directoryPath, command, ...projectPaths);

    return commandResult;
}

// TODO: JE - Figure out if we want to handle all of the error shit in this file...
// TODO: JE - That would mean tweaking the other functions in this file.
async function listProjectReferences(targetProjectUri: vscode.Uri): Promise<vscode.Uri[]> {

    const directoryPath = getParentDirectoryPath(targetProjectUri);
    const command = DotnetCommand.ListProjectReferences;

    // BUG: JE - I think it's breaking on this because `dotnet` isn't installed maybe?
    const commandResult = await executeDotnetCommand(directoryPath, command);

    if (commandResult.stderr) {
        throw new CSharpUtilitiesExtensionError(commandResult.stderr);
    }

    const outputLines = commandResult.stdout.split(EOL);

    // TODO: JE - Remove console logs...
    console.log(outputLines);

    // There are no Project to Project references in project C:\Users\elrod\src\RxTracker\RevrenLove.RxTracker.Models\.

    // Project reference(s)
    // --------------------
    // ..\RevrenLove.RxTracker.Models\RevrenLove.RxTracker.Models.csproj
    // ..\RevrenLove.RxTracker.Persistence\RevrenLove.RxTracker.Persistence.csproj        
    // ..\RevrenLove.RxTracker.Services\RevrenLove.RxTracker.Services.csproj
    return [];
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

export { executeDotnetCommand, addProjectReferences, removeProjectReferences, listProjectReferences, ExecResult };

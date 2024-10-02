import * as vscode from "vscode";
import { EOL } from "node:os";
import { exec } from "child_process";
import { promisify } from "util";
import { DotnetCommand } from "../models/dotnetCommand";
import { CSharpUtilitiesExtensionError } from "../error/cSharpUtilitiesExtensionError";
import * as utilities from "./";

const execAsync = promisify(exec);

async function addProjectReferences(
    targetProjectUri: vscode.Uri,
    addedProjectUris: vscode.Uri[],
): Promise<string> {

    const directoryPath = utilities.fileOperations.getParentDirectoryPath(targetProjectUri);
    const command = DotnetCommand.AddProjectReference;
    const projectPaths = addedProjectUris.map(u => u.fsPath);

    const commandResult = await executeDotnetCommand(directoryPath, command, ...projectPaths);

    return commandResult;
}

async function removeProjectReferences(
    targetProjectUri: vscode.Uri,
    removedProjectUris: vscode.Uri[],
): Promise<string> {

    const directoryPath = utilities.fileOperations.getParentDirectoryPath(targetProjectUri);
    const command = DotnetCommand.RemoveProjectReference;
    const projectPaths = removedProjectUris.map(u => u.fsPath);

    const commandResult = await executeDotnetCommand(directoryPath, command, ...projectPaths);

    return commandResult;
}

async function listProjectReferences(targetProjectUri: vscode.Uri): Promise<vscode.Uri[]> {

    const directoryPath = utilities.fileOperations.getParentDirectoryPath(targetProjectUri);
    const command = DotnetCommand.ListProjectReferences;

    // BUG: JE - I think it's breaking on this because `dotnet` isn't installed maybe?
    const commandResult = await executeDotnetCommand(directoryPath, command);

    // const stdout = handleExecResult(commandResult);

    const outputLines = commandResult.split(EOL);

    // TODO: JE - Remove console logs...
    console.log(outputLines);

    // EXPECTED POTENTIAL OUTPUT FROM RUNNING THE COMMAND:

    // There are no Project to Project references in project ..\RxTracker\RevrenLove.RxTracker.Models\.

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
    ...commandArgs: string[]
): Promise<string> {

    let command = `dotnet ${dotnetCommand}`;

    if (commandArgs.length > 0) {
        command += ` ${commandArgs.join(" ")}`;
    }

    const execResult = await execAsync(command, { "cwd": directoryPath });

    if (execResult.stderr) {
        throw new CSharpUtilitiesExtensionError(execResult.stderr);
    }

    return execResult.stdout;
}

export { addProjectReferences, removeProjectReferences, listProjectReferences };

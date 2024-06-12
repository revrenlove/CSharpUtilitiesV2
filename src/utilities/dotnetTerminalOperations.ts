import * as vscode from 'vscode';
import { DotnetCommand } from '../models/dotnetCommand';

const terminalName = 'dotnet';

function executeCommand(directoryPath: string, dotnetCommand: DotnetCommand, ...commandArgs: string[]) {

    const terminal = ensureTerminal(directoryPath);

    let command = `dotnet ${dotnetCommand}`;

    if (commandArgs && commandArgs.length > 0) {
        command += ` ${commandArgs.join(' ')}`;
    }

    terminal.sendText(command);
}

function ensureTerminal(path: string): vscode.Terminal {

    let terminal: vscode.Terminal | undefined;

    vscode
        .window
        .terminals
        .forEach(t => {
            if (t.name === terminalName) {
                terminal = t;
            }
        });

    if (!terminal) {

        const terminalOptions: vscode.TerminalOptions = {
            name: terminalName,
            cwd: path
        };

        terminal = vscode.window.createTerminal(terminalOptions);
    }
    else {
        terminal.sendText(['cd', `"${path}"`].join(' '), true);
    }

    return terminal;
}

export { executeCommand };

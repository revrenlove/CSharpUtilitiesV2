import * as vscode from 'vscode';

const terminalName = 'dotnet';

function executeCommand(directoryPath: string, command: string, ...commandArgs: string[]): void {

    const terminal = ensureTerminal(directoryPath);

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

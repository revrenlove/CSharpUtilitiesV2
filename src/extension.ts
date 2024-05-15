import * as vscode from 'vscode';
import { registerCommands } from '@revrenlove/easy-vscode-commands';
import { commands } from './commands';
import { HelloWorldCommand } from './commands/hello-world-command';

export function activate(context: vscode.ExtensionContext) {
    registerCommands(context, commands);

    console.log(typeof HelloWorldCommand);
}

export function deactivate() { }

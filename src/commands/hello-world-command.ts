import * as vscode from 'vscode';
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";

@commandId('c-sharp-utilities2.helloWorld')
export class HelloWorldCommand extends CommandBase {
    execute(): void {
        vscode.window.showInformationMessage('Hello, world!');
    }
}

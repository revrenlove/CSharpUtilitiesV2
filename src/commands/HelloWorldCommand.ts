import * as vscode from 'vscode';
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import { handleGracefully } from '../decorators/handleGracefully';

@commandId('c-sharp-utilities2.helloWorld')
export class HelloWorldCommand extends CommandBase {

    @handleGracefully
    execute(): void {
        vscode.window.showInformationMessage('Hello, world!');
    }
}

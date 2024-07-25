import * as vscode from "vscode";
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import { handleGracefully } from "../decorators/handleGracefully";

async function wait(seconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

async function myFunction(): Promise<string> {

    await wait(5);

    return "Done";
}

@commandId("c-sharp-utilities2.helloWorld")
export class HelloWorldCommand extends CommandBase {

    @handleGracefully
    async execute(): Promise<void> {

        const progressOptions: vscode.ProgressOptions = {
            location: vscode.ProgressLocation.Notification,
            title: "Running long task",
            // cancellable: false
        };

        const result = await vscode.window.withProgress(progressOptions, async (): Promise<string> => {
            return await myFunction();
        });

        void vscode.window.showInformationMessage(result);
    }
}

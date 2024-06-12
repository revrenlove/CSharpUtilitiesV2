import * as vscode from 'vscode';
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import { handleGracefully } from "../decorators/handleGracefully";

@commandId('c-sharp-utilities2.manageProjectReferences')
export class ManageProjectReferencesCommand extends CommandBase {

    @handleGracefully
    async execute(resource: vscode.Uri): Promise<void> {
        // TODO: JE - Actually implement this...
        throw new Error("Method not implemented.");
    }
}

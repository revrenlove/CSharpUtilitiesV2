import * as vscode from 'vscode';
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import { handleGracefully } from "../decorators/handleGracefully";
import { manageProjectReferences } from '../features/projectReferences';

@commandId('c-sharp-utilities2.manageProjectReferences')
export class ManageProjectReferencesCommand extends CommandBase {

    @handleGracefully
    async execute(resource: vscode.Uri): Promise<void> {
        await manageProjectReferences(resource);
    }
}

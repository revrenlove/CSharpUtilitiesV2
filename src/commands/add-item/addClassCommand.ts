import * as vscode from 'vscode';
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import { generateCSharpItem } from '../../features/generateCSharpItem';
import { TemplateType } from '../../templates/TemplateType';
import { handleGracefully } from '../../decorators/handleGracefully';

@commandId('c-sharp-utilities2.addClass')
export class AddClassCommand extends CommandBase {

    @handleGracefully
    async execute(uri: vscode.Uri): Promise<void> {

        await generateCSharpItem(TemplateType.class, uri);
    }
}

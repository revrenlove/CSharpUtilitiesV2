import * as vscode from 'vscode';
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import { generateCSharpItem } from '../../features/generateCSharpItem';
import { handleGracefully } from '../../decorators/handleGracefully';
import { TemplateType } from '../../features/generateCSharpItem/templateType';

@commandId('c-sharp-utilities2.addClass')
export class AddClassCommand extends CommandBase {

    @handleGracefully
    async execute(uri: vscode.Uri): Promise<void> {

        await generateCSharpItem(TemplateType.class, uri);
    }
}

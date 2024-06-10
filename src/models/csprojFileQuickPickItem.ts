import * as vscode from 'vscode';

export interface CsprojFileQuickPickItem extends vscode.QuickPickItem {
    uri: vscode.Uri
}

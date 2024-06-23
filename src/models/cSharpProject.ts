import * as vscode from 'vscode';

export interface CSharpProject {
    name: string;
    uri: vscode.Uri;
    rootNamespace: string;
    projectReferenceUris: vscode.Uri[];
}

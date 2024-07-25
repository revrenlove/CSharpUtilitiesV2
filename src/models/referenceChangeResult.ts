import * as vscode from "vscode";

export class ReferenceChangeResult {

    projectUrisToAdd: vscode.Uri[];

    projectUrisToRemove: vscode.Uri[];

    constructor(projectUrisToAdd: vscode.Uri[], projectUrisToRemove: vscode.Uri[]) {
        this.projectUrisToAdd = projectUrisToAdd;
        this.projectUrisToRemove = projectUrisToRemove;
    }

    get hasChanged(): boolean {
        return this.projectUrisToAdd.length !== 0 || this.projectUrisToRemove.length !== 0;
    }
}

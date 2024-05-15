import * as vscode from 'vscode';

export default class Settings {

    static get isFileScopedNamespace(): boolean {
        const value = this.getConfigurationValue<boolean>('newItemTemplate.fileScopedNamespace');
        return value;
    }

    static get isImplicitUsings(): boolean {
        const value = !this.getConfigurationValue<boolean>('newItemTemplate.includeUsingStatements');
        return value;
    }

    static get namespacesToInclude(): string[] {
        const value = this.getConfigurationValue<string[]>('newItemTemplate.namespacesToInclude');
        return value;
    }

    private static getConfigurationValue<T>(section: string): T {

        const config = vscode.workspace.getConfiguration('c-sharp-utilities2');

        const value = config.get(section) as T;

        return value;
    }
}

import * as vscode from 'vscode';

function getConfigurationValue<T>(section: string): T {
    
    const config = vscode.workspace.getConfiguration('c-sharp-utilities2');

    const value = config.get(section) as T;
    
    return value;
}

function isFileScopedNamespace(): boolean {
    const value = getConfigurationValue<boolean>('newItemTemplate.fileScopedNamespace');
    return value;
}

function isImplicitUsings(): boolean {
    const value = !getConfigurationValue<boolean>('newItemTemplate.includeUsingStatements');
    return value;
}

function namespacesToInclude(): string[] {
    const value = getConfigurationValue<string[]>('newItemTemplate.namespacesToInclude');
    return value;
}

export {isFileScopedNamespace,isImplicitUsings,namespacesToInclude }
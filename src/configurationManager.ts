import * as vscode from "vscode";
import { ExtensionName } from "./constants";

class ConfigurationManager {

    private static instance: ConfigurationManager | undefined;

    private constructor() {
        // Private constructor to prevent direct instantiation
    }

    static getInstance(): ConfigurationManager {

        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }

        return ConfigurationManager.instance;
    }

    private getConfigurationValue<T>(section: string): T {
        const config = vscode.workspace.getConfiguration(ExtensionName);
        return config.get(section) as T;
    }

    get isFileScopedNamespace(): boolean {
        return this.getConfigurationValue<boolean>("newItemTemplate.fileScopedNamespace");
    }

    get isImplicitUsings(): boolean {
        return !this.getConfigurationValue<boolean>("newItemTemplate.includeUsingStatements");
    }

    get namespacesToInclude(): string[] {
        return this.getConfigurationValue<string[]>("newItemTemplate.namespacesToInclude");
    }
}

export default ConfigurationManager;

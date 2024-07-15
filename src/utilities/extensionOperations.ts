import * as vscode from 'vscode';
import { ExtensionName, ExtensionPublisher } from '../constants';

function getExtension() {
    return vscode.extensions.getExtension(`${ExtensionPublisher}.${ExtensionName}`);
};

function getExtensionVersion(): string {
    const extension = getExtension();

    const version: string = extension?.packageJSON.version;

    return version;
};

export { getExtension, getExtensionVersion };

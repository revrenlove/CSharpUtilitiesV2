import * as vscode from 'vscode';
import { ExtensionName, ExtensionPublisher } from '../constants';

function getExtension() {
    return vscode.extensions.getExtension(`${ExtensionPublisher}.${ExtensionName}`);
};

function getExtensionVersion(): string {
    const extension = getExtension();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const version: string = extension?.packageJSON.version;

    return version;
};

export { getExtension, getExtensionVersion };

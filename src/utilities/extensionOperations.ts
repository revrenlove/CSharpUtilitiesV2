import * as vscode from 'vscode';
import { ExtensionName, ExtensionPublisher } from '../constants';

const getExtension = () => {
    return vscode.extensions.getExtension(`${ExtensionPublisher}.${ExtensionName}`);
};

const getExtensionVersion = (): string => {
    const extension = getExtension();

    const version: string = extension?.packageJSON.version;

    return version;
};

export { getExtension, getExtensionVersion };

import * as vscode from "vscode";
import { ExtensionName, ExtensionPublisher } from "../constants";
import IPackageJson from "@ts-type/package-dts";

function getExtensionVersion(): string | undefined {

    const extension = vscode.extensions.getExtension(`${ExtensionPublisher}.${ExtensionName}`);

    if (!extension) {
        return;
    }

    const packageJson = extension.packageJSON as IPackageJson;

    return packageJson.version;
}

export { getExtensionVersion };

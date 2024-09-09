/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// NOTE: We are disabling type safety because dealing with XML sucks.

import * as vscode from "vscode";
import * as utilities from "../../utilities";
import { parseStringPromise } from "xml2js";

async function getRootNamespace(csprojUri: vscode.Uri): Promise<string> {

    const projectName = utilities.fileOperations.getPathName(csprojUri);

    const xml = await utilities.fileOperations.readFile(csprojUri);

    const csprojDocument = await parseStringPromise(xml);

    const propertyGroups = csprojDocument.Project.PropertyGroup;

    if (!propertyGroups) {
        return projectName;
    }

    for (const propertyGroup of propertyGroups) {

        if (propertyGroup.RootNamespace?.length > 0) {
            return propertyGroup.RootNamespace[0] as string;
        }
    }

    return projectName;
}

export default getRootNamespace;

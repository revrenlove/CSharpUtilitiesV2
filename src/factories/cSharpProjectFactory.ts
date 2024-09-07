import * as vscode from "vscode";
import * as path from "path";
import { parseStringPromise } from "xml2js";

import * as util from "../utilities";
import { CSharpProject } from "../models/cSharpProject";
import { document } from "../models/msbuild";
import { listProjectReferences } from "../utilities/dotnetShellOperations";

async function cSharpProjectFactory(csprojUri: vscode.Uri): Promise<CSharpProject> {

    const projectName = path.parse(csprojUri.fsPath).name;
    const rootNamespace = await getRootNamespace(csprojUri) ?? projectName;
    const projectReferenceUris = await listProjectReferences(csprojUri);

    const cSharpProject: CSharpProject = {
        name: projectName,
        uri: csprojUri,
        rootNamespace: rootNamespace,
        projectReferenceUris: projectReferenceUris,
    };

    return cSharpProject;
}

// TODO: JE - This might need to move...
async function getRootNamespace(csprojUri: vscode.Uri): Promise<string | undefined> {

    const xml = await util.readFile(csprojUri);

    const csprojDocument = await parseStringPromise(xml) as document;

    const propertyGroups = csprojDocument.Project.PropertyGroup;

    if (!propertyGroups) {
        return;
    }

    const propertyGroup = propertyGroups.find(p => p.Property?.some(property => property.RootNamespace));

    if (!propertyGroup) {
        return;
    }

    const propertyProxy = propertyGroup.Property?.find(p => p.RootNamespace);

    if (!propertyProxy) {
        return;
    }

    const rootNamespace = propertyProxy.RootNamespace?.content;

    return rootNamespace;
}

export { cSharpProjectFactory, getRootNamespace };

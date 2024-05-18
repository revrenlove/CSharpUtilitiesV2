import * as vscode from 'vscode';
import * as path from 'path';
import { XMLParser } from 'fast-xml-parser';
import { CSharpProject } from '../models/cSharpProject';
import { readFile } from '../utilities/file-operations';

type KeyedString = { [k: string]: string; };
type KeyValuePair = { [k: string]: any };
type JsonNode = KeyValuePair[] | KeyValuePair | undefined;

const xmlParser = new XMLParser({ ignoreAttributes: false });

async function cSharpProjectFactory(uri: vscode.Uri): Promise<CSharpProject> {

    const projectName = path.parse(uri.fsPath).name;
    const fileContents = await readFile(uri);
    const projectJson = xmlParser.parse(fileContents);
    const rootNamespace = getRootNamespace(projectJson) ?? projectName;
    const projectReferencePaths = getReferencePaths(projectJson, "ProjectReference", uri.fsPath);

    const cSharpProject: CSharpProject = {
        name: projectName,
        uri: uri,
        rootNamespace: rootNamespace,
        projectReferencePaths: projectReferencePaths,
        projectReferenceUris: projectReferencePaths.map(p => vscode.Uri.file(p))
    };

    return cSharpProject;
}

function getRootNamespace(json: any): string | undefined {
    const propertyGroupNode: JsonNode = json?.Project?.PropertyGroup;

    if (!propertyGroupNode) {
        return;
    }

    let namespace: string | undefined;

    if (!Array.isArray(propertyGroupNode)) {

        namespace = propertyGroupNode.RootNamespace;

        return namespace;
    }

    for (let i = 0; i < propertyGroupNode.length; i++) {

        if (!propertyGroupNode[i].RootNamespace) {
            continue;
        }

        if (!namespace) {
            namespace = propertyGroupNode[i].RootNamespace;
            continue;
        }

        if (namespace !== propertyGroupNode[i].RootNamespace) {
            namespace = undefined;
        }
    }

    return namespace;
}

function getReferencePaths(json: any, elementName: string, projectPath: string): string[] {

    const XML_ATTRIBUTE_KEY = '@_Include';

    let projectReferencePaths: string[] = [];

    let itemGroupNode: JsonNode = json?.Project?.ItemGroup;

    if (!itemGroupNode) { return projectReferencePaths; }

    if (!Array.isArray(itemGroupNode)) {
        itemGroupNode = [itemGroupNode];
    }

    itemGroupNode = itemGroupNode.find((p: KeyValuePair) => p[elementName]);

    if (!itemGroupNode) { return projectReferencePaths; }

    const singleItemGroupNode: KeyValuePair = itemGroupNode;

    if (Array.isArray(singleItemGroupNode[elementName])) {
        projectReferencePaths = singleItemGroupNode[elementName].map((n: KeyedString) => n[XML_ATTRIBUTE_KEY]);
    }
    else {
        projectReferencePaths = [singleItemGroupNode[elementName][XML_ATTRIBUTE_KEY]];
    }

    const absoluteProjectPaths =
        projectReferencePaths
            .map(x => relativePathToAbsolutePath(x, projectPath));

    return absoluteProjectPaths;
}

function relativePathToAbsolutePath(relativePath: string, projectPath: string): string {

    // dotnet project references use windows-style slashes.
    // This normalizes to the platform.
    relativePath = relativePath.replace(/\\/g, path.sep);

    const projectDirectoryPath = path.dirname(projectPath);

    const absolutePath = path.resolve(projectDirectoryPath, relativePath);

    return absolutePath;
}

export { cSharpProjectFactory };

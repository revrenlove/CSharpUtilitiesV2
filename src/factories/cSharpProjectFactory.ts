import * as vscode from 'vscode';
import * as path from 'path';
import { parseStringPromise } from 'xml2js';
import { XMLParser } from 'fast-xml-parser';
import { CSharpProject } from '../models/cSharpProject';
import * as util from '../utilities';
import { document } from '../models/csprojFile/2003';
import { listProjectReferences } from '../utilities/dotnetShellOperations';

type KeyedString = { [k: string]: string; };
type KeyValuePair = { [k: string]: any };
type JsonNode = KeyValuePair[] | KeyValuePair | undefined;

const xmlParser = new XMLParser({ ignoreAttributes: false });

async function cSharpProjectFactory(csprojUri: vscode.Uri): Promise<CSharpProject> {

    const projectName = path.parse(csprojUri.fsPath).name;
    // const fileContents = await util.readFile(uri);
    // const projectJson = xmlParser.parse(fileContents);
    // const rootNamespace = getRootNamespace(projectJson) ?? projectName;
    const rootNamespace = await getRootNamespace(csprojUri) ?? projectName;
    // const projectReferencePaths = getReferencePaths(projectJson, "ProjectReference", csprojUri.fsPath);

    const projectReferenceUris = await getProjectReferenceUris(csprojUri);

    const cSharpProject: CSharpProject = {
        name: projectName,
        uri: csprojUri,
        rootNamespace: rootNamespace,
        projectReferenceUris: projectReferenceUris,
    };

    return cSharpProject;
}

async function getRootNamespace(csprojUri: vscode.Uri): Promise<string | undefined> {

    const xml = await util.readFile(csprojUri);

    const csprojDocument = await parseStringPromise(xml) as document;

    const propertyGroups = csprojDocument.Project.PropertyGroup;

    if (!propertyGroups) {
        return;
    }

    const propertyGroup = propertyGroups.find(p => p.Property && p.Property.some(property => property.RootNamespace));

    if (!propertyGroup) {
        return;
    }

    const propertyProxy = propertyGroup.Property!.find(p => p.RootNamespace)!;

    const rootNamespace = propertyProxy.RootNamespace!.content;

    return rootNamespace;
}

async function getProjectReferenceUris(csprojUri: vscode.Uri): Promise<vscode.Uri[]> {
    // TODO: JE - Finish implementing this... or figure out what the fuck is going on here...
    const x = await listProjectReferences(csprojUri);

    return [];
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

export default cSharpProjectFactory;

// TODO: JE - Document how this export/testing pattern works
const testableFunctions = { getProjectReferenceUris, relativePathToAbsolutePath };
export { testableFunctions as cSharpProjectFactoryInternalFunctions };

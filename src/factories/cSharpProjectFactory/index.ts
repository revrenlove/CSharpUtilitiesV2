import * as vscode from "vscode";
import { CSharpProject } from "../../models/cSharpProject";
import getRootNamespace from "./getRootNamespace";
import { listProjectReferences } from "../../utilities/dotnetShellOperations";
import * as utilities from "../../utilities";

async function cSharpProjectFactory(csprojUri: vscode.Uri): Promise<CSharpProject> {

    const projectName = utilities.fileOperations.getPathName(csprojUri);
    const rootNamespace = await getRootNamespace(csprojUri);
    const projectReferenceUris = await listProjectReferences(csprojUri);

    const cSharpProject: CSharpProject = {
        name: projectName,
        uri: csprojUri,
        rootNamespace: rootNamespace,
        projectReferenceUris: projectReferenceUris,
    };

    return cSharpProject;
}

export default cSharpProjectFactory;
export { getRootNamespace };

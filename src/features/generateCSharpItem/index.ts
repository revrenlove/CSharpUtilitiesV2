import { EOL } from "node:os";
import * as path from "path";
import * as vscode from "vscode";
import { ItemFileTemplate } from "./itemFileTemplate";
import { TemplateType } from "./templateType";
import * as utilities from "../../utilities";
import { TemplatePaths } from "../../constants";
import { ReadDirectoryResult } from "../../models/readDirectoryResult";
import ConfigurationManager from "../../configurationManager";
import cSharpProjectFactory from "../../factories/cSharpProjectFactory";

const configurationManager = ConfigurationManager.getInstance();

const filenameRegex = new RegExp(`\\${path.sep}[^\\${path.sep}]+$`);
const csExtRgx = /\.cs$/;

async function generateCSharpItem(templateType: TemplateType, contextualUri: vscode.Uri): Promise<void> {

    const filename = await promptForFilename(templateType);

    if (!filename) {
        return;
    }

    const newFileUri = await getNewFileUri(filename, contextualUri);

    if (await utilities.fileOperations.fileExists(newFileUri)) {
        throw new Error(`File already exists: ${newFileUri.fsPath}`);
    }

    const namespace = await getFullNamespace(newFileUri);

    const template: ItemFileTemplate = {
        namespace: namespace,
        objectType: TemplateType[templateType],
        objectName: filename.replace(csExtRgx, ""),
        usings: generateUsingStatementsTemplateValue(),
    };

    const fileContentsString = await populateTemplate(template);

    await utilities.fileOperations.writeFile(newFileUri, fileContentsString);
    await openEditor(newFileUri);
}

async function promptForFilename(templateType: TemplateType): Promise<string | undefined> {

    const templateTypeName = utilities.stringOperations.capitalizeFirstLetter(TemplateType[templateType]);

    let placeHolder = `MyAwesome${templateTypeName}`;

    if (templateType === TemplateType.interface) {
        placeHolder = `I${placeHolder}`;
    }

    let filename = await vscode.window.showInputBox({
        "prompt": `Please enter the name of the new ${templateTypeName}...`,
        "placeHolder": placeHolder,
    });

    if (!filename) {
        return;
    }

    if (!filename.endsWith(".cs")) {
        filename += ".cs";
    }

    return filename;
}

async function getNewFileUri(filename: string, contextualUri: vscode.Uri): Promise<vscode.Uri> {

    let newFileDirectoryPath: string;

    const stat = await vscode.workspace.fs.stat(contextualUri);

    if (stat.type === vscode.FileType.Directory) {

        newFileDirectoryPath = contextualUri.fsPath;
    }
    else {
        newFileDirectoryPath = contextualUri.fsPath.replace(filenameRegex, "");
    }

    const newFilePath = path.join(newFileDirectoryPath, filename);
    const newFileUri = vscode.Uri.file(newFilePath);

    return newFileUri;
}

async function getFullNamespace(newFileUri: vscode.Uri): Promise<string> {

    const directoryPath = newFileUri.fsPath.replace(filenameRegex, "");
    const directoryUri = vscode.Uri.file(directoryPath);

    const projectFileUri = await getProjectFileUri(directoryUri);

    const cSharpProject = await cSharpProjectFactory(projectFileUri);

    let namespace = cSharpProject.rootNamespace;

    const projectFileDirectoryPath = path.parse(projectFileUri.fsPath).dir;

    if (directoryPath !== projectFileDirectoryPath) {

        const escapedSeparator = path.sep.replace(/\\/g, "\\\\");

        const pathRegex = new RegExp(escapedSeparator, "g");

        const subNamespace =
            directoryPath
                .replace(projectFileDirectoryPath, "")
                .replace(pathRegex, ".");

        namespace += subNamespace;
    }

    return namespace;

}

async function getProjectFileUri(directoryUri: vscode.Uri): Promise<vscode.Uri> {

    let projectFileUri: vscode.Uri;

    const readDirectoryResults = (await vscode.workspace.fs.readDirectory(directoryUri)).map(r => {
        const result: ReadDirectoryResult = {
            name: r[0],
            fileType: r[1],
        };

        return result;
    });

    const projectFileResult = readDirectoryResults.find(r => r.name.endsWith(".csproj"));

    if (projectFileResult) {
        projectFileUri = vscode.Uri.file(path.join(directoryUri.fsPath, projectFileResult.name));

        return projectFileUri;
    }

    const workspaceFolder = vscode.workspace.getWorkspaceFolder(directoryUri);

    if (workspaceFolder?.uri.fsPath === directoryUri.fsPath) {
        throw new Error("You can only add an item in a C# project folder.");
    }

    const parentDirectoryUri = vscode.Uri.joinPath(directoryUri, "..");

    projectFileUri = await getProjectFileUri(parentDirectoryUri);

    return projectFileUri;
}

function generateUsingStatementsTemplateValue(): string {

    const includedNamespaces = configurationManager.namespacesToInclude;

    if (configurationManager.isImplicitUsings || includedNamespaces.length === 0) {
        return "";
    }

    const usingStatements = includedNamespaces.map(namespace => `using ${namespace};`);

    const templateValue = `${usingStatements.join(EOL)}${EOL}${EOL}`;

    return templateValue;
}

async function populateTemplate(templateValues: ItemFileTemplate): Promise<string> {

    const templateUri = vscode.Uri.file(getTemplatePath());

    let template = await utilities.fileOperations.readFile(templateUri);

    for (const [placeholder, value] of Object.entries(templateValues)) {

        const rgx = new RegExp(`%${placeholder}%`);

        template = template.replace(rgx, value as string);
    }

    return template;
}

function getTemplatePath(): string {

    let templatePath = TemplatePaths.namespaceEncapsulated;

    if (configurationManager.isFileScopedNamespace) {
        templatePath = TemplatePaths.fileScopedNamespace;
    }

    return templatePath;
}

async function openEditor(uri: vscode.Uri): Promise<void> {

    const editor = await vscode.window.showTextDocument(uri);

    const position = getCursorPosition(editor.document);

    const newSelection = new vscode.Selection(position, position);

    editor.selection = newSelection;
}

function getCursorPosition(document: vscode.TextDocument): vscode.Position {

    let cursorLineNumber = 0;
    let cursorColumnNumber = 0;

    for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {

        const line = document.lineAt(lineNumber);

        if (line.text.includes("}")) {
            cursorLineNumber = lineNumber - 1;
            break;
        }
    }

    cursorColumnNumber = document.lineAt(cursorLineNumber).text.length;

    const position = new vscode.Position(cursorLineNumber, cursorColumnNumber);

    return position;
}

export { generateCSharpItem };

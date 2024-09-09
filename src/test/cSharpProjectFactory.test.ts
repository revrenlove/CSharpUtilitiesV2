import * as assert from "assert";
import * as vscode from "vscode";
import { getRootNamespace } from "../factories/cSharpProjectFactory";

suite("`getRootNamespace` Suite", () => {

    test("No Explicit Namespace", async () => {

        const path = `${__dirname}/assets/NoExplicitNamespace.csproj`;

        const csprojUri = vscode.Uri.file(path);

        const rootNamespace = await getRootNamespace(csprojUri);

        assert.strictEqual(rootNamespace, "NoExplicitNamespace");
    });

    test("Explicit Namespace", async () => {

        const path = `${__dirname}/assets/ExplicitNamespace.csproj`;

        const csprojUri = vscode.Uri.file(path);

        const rootNamespace = await getRootNamespace(csprojUri);

        assert.strictEqual(rootNamespace, "CustomNamespace");
    });

    // TODO: JE - Test case for multiple RootNamespace nodes
    // TODO: JE - Test case for multiple PropertyGroup nodes
    // TODO: JE - Test case for multiple PropertyGroup with RootNamespace nodes
    // TODO: JE - Test case for multiple PropertyGroup with Multiple RootNamespace nodes
});

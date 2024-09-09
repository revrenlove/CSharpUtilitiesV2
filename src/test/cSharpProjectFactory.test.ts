import * as assert from "assert";
import * as vscode from "vscode";
import { getRootNamespace } from "../factories/cSharpProjectFactory";
// import { getRootNamespace } from "../factories/cSharpProjectFactory";
// import getRootNamespace from "../factories/cSharpProjectFactory/getRootNamespace";
// import { getRootNamespace } from "../factories/cSharpProjectFactory";
// import { getRootNamespace } from "../factories/cSharpProjectFactory";

// TODO: JE - Maybe make a config? for each type of csproj file you'll need for the tests so the filenames aren't hard-coded here...
// const projectFilePath = "";

// TODO: JE - This obviously needs to be implemented...
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

    // Case for No root namespace (use project file name)

    // case for explicit root namespace (and use that)

});

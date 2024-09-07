import * as assert from "assert";
import { capitalizeFirstLetter } from "../utilities";
import * as vscode from "vscode";

// TODO: JE - Maybe make a config? for each type of csproj file you'll need for the tests so the filenames aren't hard-coded here...
// const projectFilePath = "";

// TODO: JE - This obviously needs to be implemented...
suite("`getRootNamespace` Suite", () => {
    test("Jim test", () => {

        const x = capitalizeFirstLetter("hi");
        assert.strictEqual(x, "Hi");

        void vscode.window.showInformationMessage("SS");
    });
});

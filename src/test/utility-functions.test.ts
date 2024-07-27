import * as assert from "assert";
import { capitalizeFirstLetter } from "../utilities";
import * as vscode from "vscode";

// TODO: JE - Delete this...
suite("Util Test Suite", () => {
    test("Util test", () => {

        const x = capitalizeFirstLetter("hi");
        assert.strictEqual(x, "Hi");

        // const y = vscode.window.activeColorTheme;
        void vscode.window.showInformationMessage("SS");
    });
});

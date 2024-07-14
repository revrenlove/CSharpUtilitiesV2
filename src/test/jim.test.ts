import * as assert from 'assert';
import { capitalizeFirstLetter } from '../utilities';
import * as vscode from 'vscode';

suite('Jim Test Suite', () => {
    test('Jim test', () => {
        // throw new Error("AAAAA");
        // assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        // assert.strictEqual(-1, [1, 2, 3].indexOf(0));

        const x = capitalizeFirstLetter("hi");
        assert.strictEqual(x, "Hi");

        const y = vscode.window.activeColorTheme;
        vscode.window.showInformationMessage("SS");
    });
});

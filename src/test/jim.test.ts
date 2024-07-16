import * as assert from 'assert';
import { capitalizeFirstLetter } from '../utilities';
import * as vscode from 'vscode';

suite('Jim Test Suite', () => {
    test('Jim test', () => {
        // TODO: JE - Delete this file

        const x = capitalizeFirstLetter("hi");
        assert.strictEqual(x, "Hi");

        // const y = vscode.window.activeColorTheme;
        void vscode.window.showInformationMessage("SS");
    });
});

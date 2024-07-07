import * as vscode from 'vscode';
import * as assert from 'assert';
import { cSharpProjectFactoryInternalFunctions as cSharpProjectFactory } from '../factories/cSharpProjectFactory';

// TODO: JE - Debugging the tests DOES NOT WORK!!!
suite('`cSharpProjectFactory` Test Suite', () => {
    test('`getProjectReferenceUris` returns empty array when no references are in the .csproj file', async () => {
        const uri = vscode.Uri.file('./assets/NoReferences.csproj');

        const referenceUris = await cSharpProjectFactory.getProjectReferenceUris(uri);

        assert.strictEqual(referenceUris.length, 1);
    });
});

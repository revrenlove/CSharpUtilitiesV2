import * as assert from 'assert';

suite('Jim Test Suite', () => {
    test('Jim test', () => {
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });
});

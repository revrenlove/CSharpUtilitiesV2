import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
    {
        ignores: ["**/*.d.ts", "**/out", ".vscode-test"],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        plugins: {
            // '@typescript-eslint': tseslint.plugin,
            "@stylistic": stylistic,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
            },
        },
        rules: {
            '@stylistic/indent': ['error', 4],
        },
    },
    {
        files: ["**/*.mjs"],
        ...tseslint.configs.disableTypeChecked,
    }
)
import { defineConfig } from "@vscode/test-cli";
// TODO: #33 - JE - Remove this comment
export default defineConfig({
    files: "out/test/**/*.test.js",
});

import * as esbuild from "esbuild";
import rmRf from "./rmRf.mjs";
import copyfilesHelper from "./copyfilesHelper.mjs";

rmRf("./out");

// TODO: JE - Fix the "usage" - like, give the user some guidance if they pass the wrong parameter or something...
let isProd = false;

if (process.argv.length === 3 && process.argv[2] === "--prod") {
    isProd = true;
}

const mainEntryPoint = "./src/extension.ts";
const testEntryPoint = "./src/test/**/*.ts";

const entryPoints = [mainEntryPoint];

if (!isProd) {
    entryPoints.push(testEntryPoint);
}

const minify = isProd;
const sourcemap = !isProd;

await esbuild.build({
    bundle: true,
    outdir: "./out",
    format: "cjs",
    external: ["vscode"],
    platform: "node",
    minify: minify,
    sourcemap: sourcemap,
    entryPoints: entryPoints,
});

copyfilesHelper(["./**/*.tmpl"], "./out", 1);

if (!isProd) {
    copyfilesHelper(["./src/test/assets/*"], "./out/test/assets", 3);
}

import * as fs from "fs";
import * as esbuild from "esbuild";
import rmRf from "./rmRf.mjs";
import copyfilesAsync from "./copyfilesAsync.mjs";

console.info("Build has started.");

if (fs.existsSync("./out")) {

    await copyfilesAsync(["./out/**/*"], "./out.backup", 1);

    rmRf("./out");
}

// TODO: JE - Document this...
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

// TODO: JE - Check for errors, if there are, revert to backup out. skip the copyfiles calls

const buildResult = await esbuild.build({
    bundle: true,
    outdir: "./out",
    format: "cjs",
    external: ["vscode"],
    platform: "node",
    minify: minify,
    sourcemap: sourcemap,
    entryPoints: entryPoints,
});

console.log(buildResult);

if (buildResult.errors.length > 0 || buildResult.warnings.length > 0) {
    throw new Error("Something fucked up.");
}

await copyfilesAsync(["./**/*.tmpl"], "./out", 1);

if (!isProd) {
    await copyfilesAsync(["./src/test/assets/*"], "./out/test/assets", 3);
}

// TODO: remove backup "out"
console.info("Build process complete");

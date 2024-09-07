// TODO: JE - This is where we will execute all the dotnet commands
//              to build out the projects for integration testing
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const { stdout, stderr } = await execAsync("dotnet --version");

if (stderr) {
    throw new Error(stderr);
}

console.info(`dotnet version: ${stdout}`);

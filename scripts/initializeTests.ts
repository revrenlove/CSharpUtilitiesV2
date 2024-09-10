// TODO: JE - This is where we will execute all the dotnet commands
//              to build out the projects for integration testing
import execAsync from "./execAsync";
import { ExecAsyncError } from "./execAsync";

try {
    const version = await execAsync("dotnet --version");

    console.info(`dotnet version: ${version}`);
}
catch (e: unknown) {
    if (e instanceof ExecAsyncError) {
        console.error(e.message);
    }

    throw e;
}

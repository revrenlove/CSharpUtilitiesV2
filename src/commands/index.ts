import { EasyVsCodeCommand } from "@revrenlove/easy-vscode-commands";
import { HelloWorldCommand } from "./helloWorldCommand";
import { addItemCommands } from "./add-item";
import { ManageProjectReferencesCommand } from "./manageProjectReferencesCommand";

const commands: EasyVsCodeCommand[] = [
    HelloWorldCommand,
    ...addItemCommands,
    ManageProjectReferencesCommand,
];

export { commands };

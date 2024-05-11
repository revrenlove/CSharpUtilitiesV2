import { EasyVsCodeCommand } from "@revrenlove/easy-vscode-commands";
import { HelloWorldCommand } from "./HelloWorldCommand";
import { addItemCommands } from "./add-item";

const commands: EasyVsCodeCommand[] = [
    HelloWorldCommand,
    ...addItemCommands
];

export { commands };

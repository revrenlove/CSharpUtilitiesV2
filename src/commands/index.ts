import { EasyVsCodeCommand } from "@revrenlove/easy-vscode-commands";
import { HelloWorldCommand } from "./helloWorldCommand";
import { addItemCommands } from "./add-item";

const commands: EasyVsCodeCommand[] = [
    HelloWorldCommand,
    ...addItemCommands
];

export { commands };

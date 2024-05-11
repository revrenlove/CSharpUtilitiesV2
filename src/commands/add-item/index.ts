import { EasyVsCodeCommand } from "@revrenlove/easy-vscode-commands";
import { AddClassCommand } from "./AddClassCommand";
import { AddEnumCommand } from "./AddEnumCommand";
import { AddInterfaceCommand } from "./AddInterfaceCommand";
import { AddRecordCommand } from "./AddRecordCommand";
import { AddStructCommand } from "./AddStructCommand";

const addItemCommands: EasyVsCodeCommand[] = [
    AddClassCommand,
    AddEnumCommand,
    AddInterfaceCommand,
    AddRecordCommand,
    AddStructCommand
];

export { addItemCommands };

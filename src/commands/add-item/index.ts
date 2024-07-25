import { EasyVsCodeCommand } from "@revrenlove/easy-vscode-commands";
import { AddClassCommand } from "./addClassCommand";
import { AddEnumCommand } from "./addEnumCommand";
import { AddInterfaceCommand } from "./addInterfaceCommand";
import { AddRecordCommand } from "./addRecordCommand";
import { AddStructCommand } from "./addStructCommand";

const addItemCommands: EasyVsCodeCommand[] = [
    AddClassCommand,
    AddEnumCommand,
    AddInterfaceCommand,
    AddRecordCommand,
    AddStructCommand,
];

export { addItemCommands };

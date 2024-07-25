import { CommandBase } from "@revrenlove/easy-vscode-commands";
import { errorCallback } from "../error/errorCallback";

// TODO: #18 - JE - Make this consistent... all on individual lines or all on one line
function handleGracefully(
    _target: CommandBase,
    _propertyKey: string, descriptor: PropertyDescriptor,
): PropertyDescriptor {

    const originalMethod = descriptor.value as (...args: unknown[]) => unknown;

    descriptor.value = async function(...args: unknown[]) {
        try {
            const result: unknown = await originalMethod(...args);
            return result;
        }
        catch (e) {
            await errorCallback(e as Error);
        }
    };

    return descriptor;
}

export { handleGracefully };

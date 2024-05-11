import * as vscode from 'vscode';

const errorCallback = (e: any) => {
    let message: string;

    if (e instanceof Error) {
        message = e.message;
    }
    else {
        message = `Here's the whole error object: ${JSON.stringify(e)}`;
    }

    vscode.window.showErrorMessage(message);
};

function handleGracefully(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        try {
            const result = await originalMethod(...args);
            return result;
        }
        catch (e) {
            errorCallback(e);
        }
    };

    return descriptor;
}

export { handleGracefully };

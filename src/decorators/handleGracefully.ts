import * as vscode from 'vscode';

function handleGracefully(_target: any, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
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

const errorCallback = (e: any) => {
    let message: string;

    if (e instanceof Error) {
        message = e.message;
    }
    else {
        message = `Error: ${JSON.stringify(e)}`;
    }

    vscode.window.showErrorMessage(message);
};

export { handleGracefully };

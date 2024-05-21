import * as vscode from 'vscode';
import axios, { AxiosResponse, AxiosError } from 'axios';

function handleGracefully(_target: any, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        try {
            const result = await originalMethod(...args);
            return result;
        }
        catch (e) {
            await errorCallback(e);
        }
    };

    return descriptor;
}

const errorCallback = async (e: any) => {

    let payload;

    if (e instanceof Error) {
        payload = {
            stack: e.stack,
            message: e.message,
            name: e.name
        };
    }

    // console.log(e);
    const response = await axios.post("http://localhost:7071/api/reportbug", payload);

    // TODO: Add a button to actually call the API!!!
};

export { handleGracefully };

import { errorCallback } from '../error/errorCallback';

function handleGracefully(_target: any, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        try {
            const result = await originalMethod(...args);
            return result;
        }
        catch (e) {
            await errorCallback(e as Error);
        }
    };

    return descriptor;
}

export { handleGracefully };

export abstract class CSharpUtilitiesExtensionError extends Error {

    constructor(message: string) {
        super(message);
    }

    public get name(): string {
        return this.constructor.name;
    }
}

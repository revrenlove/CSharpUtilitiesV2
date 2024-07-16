// TODO: JE - Not sure of this should be abstract???
export class CSharpUtilitiesExtensionError extends Error {

    public get name(): string {
        return this.constructor.name;
    }
}

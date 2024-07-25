import { createHash } from "crypto";

export class TreeNode<T> {

    private readonly valueHash: string;

    public readonly value: NonNullable<T>;

    public readonly children: TreeNode<T>[];

    public readonly parent: TreeNode<T> | undefined;

    constructor(value: NonNullable<T>, parent?: TreeNode<T>) {

        this.value = value;
        this.parent = parent;
        this.children = [];

        this.valueHash =
            createHash("md5")
                .update(JSON.stringify(this.value))
                .digest("hex");
    }

    public isCircular(): boolean {

        let parent = this.parent;

        while (parent !== undefined) {
            if (parent.valueHash === this.valueHash) {
                return true;
            }
            parent = parent.parent;
        }

        return false;
    }
}

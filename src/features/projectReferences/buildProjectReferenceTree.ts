import { TreeNode } from "../../models/treeNode";
import { CSharpProject } from "../../models/cSharpProject";
import { cSharpProjectFactory } from '../../factories/cSharpProjectFactory';

async function buildProjectReferenceTree(node: TreeNode<CSharpProject>): Promise<TreeNode<CSharpProject>> {

    const project = node.value;

    const nodePromises = project.projectReferenceUris.map(async uri => {

        const childProject = await cSharpProjectFactory(uri);

        let child = new TreeNode(childProject, node);

        if (child.isCircular()) {
            // TODO: JE - This needs to be a custom error
            throw new Error(`Circular Reference Detected: ${child.value.name}`);
        }

        child = await buildProjectReferenceTree(child);

        node.children.push(child);
    });

    await Promise.all(nodePromises);

    return node;
}

export { buildProjectReferenceTree };

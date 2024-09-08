// Using this script instead of just `rm -rf` since
// some systems don't have bash as their default.
import * as fs from "fs";

const itemsToDelete = process.argv.slice(2);

const deleteOptions = {
    force: true,
    recursive: true,
};

const remove = item => {
    fs.rmSync(item, deleteOptions);
    console.info(`\`${item}\` has been deleted`);
};

/**
 *
 * @param  {...string} itemsToDelete
 */
function rmRf(...itemsToDelete) {
    itemsToDelete.forEach(remove);
}

rmRf(...itemsToDelete);

export default rmRf;

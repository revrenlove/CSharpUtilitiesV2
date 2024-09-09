import { promisify } from "util";
import copyfiles from "copyfiles";

const copyfilesPromisified = promisify(copyfiles);

/**
 *
 * @param {Array<string>} sourceGlobs
 * @param {string} destination
 * @param {number} up
 */
async function copyfilesAsync(sourceGlobs, destination, up) {
    await copyfilesPromisified([...sourceGlobs, destination], {
        all: true,
        up: up,
    });
}

export default copyfilesAsync;

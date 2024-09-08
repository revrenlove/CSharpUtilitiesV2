import copyfiles from "copyfiles";

/**
 *
 * @param {Array<string>} sourceGlobs
 * @param {string} destination
 * @param {number} up
 */
function copyfilesHelper(sourceGlobs, destination, up) {
    copyfiles([...sourceGlobs, destination], up, e => {
        if (e) throw e;
    });
}

export default copyfilesHelper;

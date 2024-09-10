import { RmOptions, rmSync } from "fs";

const options: RmOptions = {
    force: true,
    recursive: true,
};

function rmRf(paths: string | string[], verbose = false): void {

    if (typeof paths === "string") {
        paths = [paths];
    }

    paths.forEach(item => {
        rmSync(item, options);
        if (verbose) {
            console.info(`"${item}" has been deleted.`);
        }
    });
}

export default rmRf;

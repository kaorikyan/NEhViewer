import { isAbsolute, join } from "node:path";
import { existsSync, constants as fsconst } from "node:fs";
import { readFile, access } from "node:fs/promises";

export class CookieJar {

    constructor() {

    }

    /**
     * Loads cookies from a file.
     * 
     * @param filepath The path to the cookie jar file.
     */
    static async loadCookies(filepath: string) {
        if (!isAbsolute(filepath)) {
            filepath = join(process.cwd(), filepath);
        }
        if (!existsSync(filepath)) {
            await access(filepath, fsconst.W_OK);
        } else {

        }
    }

}

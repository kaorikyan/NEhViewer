import { isAbsolute, join } from "path";
import { existsSync, constants as fsconst } from "fs";
import { readFile, access } from "fs/promises";

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

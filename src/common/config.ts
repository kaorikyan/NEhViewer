import { existsSync, constants as fsconst } from "node:fs";
import { writeFile, readFile, access } from "node:fs/promises";
import { dirname, isAbsolute, join } from "node:path";
import { homedir, tmpdir } from "node:os";

export interface IConfig {
    [key: string]: any;
    app_home: string;
    download_dir: string;
}

const defaultConfig: IConfig = {
    app_home: ".",
    download_dir: "./downloads",
};

export class Config {

    static Instance: Config;

    config = defaultConfig;

    constructor(
        private configpath: string
    ) { }

    static loadConfig(filepath?: string): Config {
        if (typeof filepath === 'string') {
            if (existsSync(filepath)) {
                return new Config(filepath);
            } else {
                throw new Error(`Config file ${filepath} does not exist.`);
            }
        } else {
            throw new Error("Config filepath is not a string.");
        }
    }

}
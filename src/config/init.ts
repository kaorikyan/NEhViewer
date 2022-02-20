import inquirer, { Answers, DistinctQuestion } from "inquirer";
import config, { IConfig } from ".";
import i18n from "../common/i18n";
import path from "./path";
import { constants as fsconst } from "node:fs";
import { access, mkdir } from "node:fs/promises";
import { join } from "node:path";
import Rx from "rxjs";

const initPromptMap: { [key: string]: DistinctQuestion } = {
    'storage.data':{

    }
}

export async function initConfig() {

    console.log(i18n.__("INIT.NOTIFICATION", config.path));

    const prompts = new Rx.Subject<DistinctQuestion>();


    const session = inquirer.prompt<IConfig>(prompts);

    prompts.next({
        type: 'input',
        name: 'data',
        message: i18n.__('INIT.CONFIG.DATA'),
        default: path.data,
        validate: async (input: string, answers?: IConfig) => {
            await mkdir(input, { recursive: true });
            return true;
        }
    });
    prompts.next({
        type: 'input',
        name: 'temp',
        message: i18n.__('INIT.CONFIG.TEMP'),
        default: path.temp,
        validate: async (input: string, answers?: IConfig) => {
            await mkdir(input, { recursive: true });
            return true;
        }
    });
    prompts.next({
        type: 'input',
        name: 'cache',
        message: i18n.__('INIT.CONFIG.CACHE'),
        default: path.cache,
        validate: async (input: string, answers?: IConfig) => {
            await mkdir(input, { recursive: true });
            return true;
        }
    });
    prompts.next({
        type: 'input',
        name: 'log',
        message: i18n.__('INIT.CONFIG.LOG'),
        default: path.log,
        validate: async (input: string, answers?: IConfig) => {
            await mkdir(input, { recursive: true });
            return true;
        }
    });
    prompts.next({
        type: 'input',
        name: 'database',
        message: i18n.__('INIT.CONFIG.DATABASE'),
        default: (answers: IConfig) => {
            return join(answers.storage.data, 'database.sqlite');
        },
        validate: async (input: string, answers?: IConfig) => {
            await mkdir(input, { recursive: true });
            return true;
        }
    });
    prompts.complete();

    const answers = await session;

}

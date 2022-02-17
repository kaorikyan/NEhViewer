import { IConfig } from "../common/config";

export class Client {

    private run_in_exmode: boolean = false;

    constructor(
        private readonly config: IConfig,
    ) {

    }

}
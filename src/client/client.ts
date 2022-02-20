import Axios from "axios";
import { IConfig } from "../config";

export class Client {

    private run_in_exmode: boolean = false;

    constructor(
        private readonly config: IConfig,
    ) {
        Axios.create({

        })
    }

}
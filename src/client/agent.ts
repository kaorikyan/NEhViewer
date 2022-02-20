import { Agent as HttpAgent } from "node:http";
import { Agent as HttpsAgent } from "node:https";
import { LookupFunction } from "node:net";

export interface ICreateAgentOptions {
    lookup?: LookupFunction;
}

export interface ICreateAgentResult {
    http: HttpAgent;
    https: HttpsAgent;
}

export function createAgent(options: ICreateAgentOptions = {}): ICreateAgentResult {
    const http = new HttpAgent({
        lookup: options.lookup,
    });
    const https = new HttpsAgent({
        lookup: options.lookup,
    });
    return {
        http,
        https,
    };
}

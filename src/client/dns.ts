import { lookup as defaultLookup } from "dns/promises";
import { LookupFunction } from "net";
import config from "../config";

export function lookup(
    hostname: string,
    options: any,
    callback: (err: Error | null, address: string, family: number) => void
): void {
    if (config.get('', false)) {

    } else {
        
    }
}

export const a: LookupFunction = lookup;
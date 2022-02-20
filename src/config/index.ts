import Conf, { Schema } from "conf";
import StoreSchema from "./schema/store.schema.json";

export interface IConfigStorage {
    data: string;
    temp: string;
    cache: string;
    log: string;
    database: string;
    download: string;
}

export interface IConfigClient {
    site: 'eh' | 'ex';
    connection: 'direct' | 'proxy' | 'domain_fronting' | 'all';
    dns: 'default' | 'hosts';
}

export interface IConfigClientWithProxy extends IConfigClient {
    connection: 'proxy';
    protocol: 'http' | 'https' | 'socks5';
    host: string;
    port: number;
    username?: string;
    password?: string;
}

export interface IConfigClientWithDomainFronting extends IConfigClient {
    connection: 'domain_fronting';
}

export interface IConfigUserAuth {
    ipb_member_id: string;
    ipb_pass_hash: string;
    igneous?: string;
}

export interface IConfig {
    storage: IConfigStorage;
    site: 'eh' | 'ex';
    proxy: {
        protocol: 'http' | 'https' | 'socks5';
        host: string;
        port: number;
        username?: string;
        password?: string;
    },
    domain_fronting: boolean;
    authentication: IConfigUserAuth;
}

export const schema = {
    storage: StoreSchema as any,
}

const config = new Conf({
    projectName: 'NEhViewer',
    schema,
    fileExtension: 'json',
    serialize: (obj: any) => JSON.stringify(obj, null, 2),
});

console.log(config.path);

export default config;
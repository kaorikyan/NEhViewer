import { homedir, tmpdir } from "node:os";
import { dirname, isAbsolute, join } from "node:path";

export function getAppPath() {
    return join(__dirname, '../..');
}

export function getPath(name: 'home' | 'temp' | 'appData') {
    switch (name) {
        case 'home':
            return homedir();
        case 'temp':
            return tmpdir();
        case 'appData':
            return 
        default:
            break;
    }
}

import { getAppPath, getPath } from "./common/utils";

console.log(`AppPath: ${getAppPath()}`);
console.log(`HomePath: ${getPath('home')}`);
console.log(`TempPath: ${getPath('temp')}`);

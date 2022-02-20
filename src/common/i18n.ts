import { I18n } from "i18n";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const i18n = new I18n();

const fileURL = dirname(import.meta.url);
const mainDir = join(fileURLToPath(fileURL), '../..');

i18n.configure({
    locales: ["zh"],
    fallbacks: {
        "zh-*": "zh",
    },
    objectNotation: true,
    defaultLocale: Intl.DateTimeFormat().resolvedOptions().locale,
    directory: join(mainDir, "locales"),
});

export default i18n;
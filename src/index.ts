import { Command } from "commander";
import i18n from "./common/i18n";

const program = new Command('NEhViewer');

// program
//     .name('NEhViewer');

program
    .command('test')
    .argument('<what>', i18n.__('CLI.TEST.WHAT'))
    .option('-t, --test', 'test')
    .action(() => {
        console.log('test');
    });

program.parse();

const {Command} = require('commander');
const start = require('./cli');
const program = new Command();

program
    .name('couriourc-graph-vis')
    .description('This is a Cli for component demo ⊂(・(ェ)・)⊃')
    .version('0.8.0');

program.command('build')
    .description('🎉build this component')
    .action(() => {
        console.log(process.cwd());
        start();
    });

program.parse();

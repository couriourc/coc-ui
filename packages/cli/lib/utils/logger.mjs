const chalk = require('chalk');

const success = chalk.rgb(200, 200, 200).bgRgb(0, 200, 3);
const error = chalk.rgb(200, 200, 200).bgRgb(0, 200, 3);
const warning = chalk.rgb(200, 200, 200).bgRgb(0, 200, 3);

module.exports = {
    success(...args) {
        console.info(success(...args));
    },
    error(...args) {
        console.error(success(...args));
    },
    warning(...args) {
        console.warn(warning(...args));
    },
};

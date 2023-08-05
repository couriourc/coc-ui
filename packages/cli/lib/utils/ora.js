const ora = require('ora');

// ora

module.exports = {
    loading(text, options = {}) {
        const spinner = ora({
            text: text,
            ...options,
        });
        spinner.start();
        return spinner;
    },
};

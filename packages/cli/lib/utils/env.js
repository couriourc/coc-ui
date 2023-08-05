const fs = require('fs');
const path = require('path');
const {loadConfigFile} = require('rollup/loadConfigFile');
const {globSync} = require('glob');
const BASE_CONFIGURATION_FILE_PATTERN = 'rollup.config.js';
const CONFIGURATION_FILE_PATTERN = 'coc.config.{js,ts,json}';
module.exports = {
    // BaseConfiguration
    BASE_CONFIGURATION_FILE_PATTERN,
    CONFIGURATION_FILE_PATTERN,
    // read env
    isProd: process.env.NODE_ENV === 'production',
    // has external config
    async getExternalConfig() {
        const config = globSync(CONFIGURATION_FILE_PATTERN, {ignore: 'node_modules/**', cwd: process.cwd()});
        return await Promise.all(config.map((filePath) => loadConfigFile(path.resolve(process.cwd(), filePath))));
    },
};

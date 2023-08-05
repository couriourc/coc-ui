const rollup = require('rollup');
const path = require('path');
const {loadConfigFile} = require('rollup/loadConfigFile');
// 加载当前脚本旁边的配置文件；
// 提供的配置对象与在命令行上传递 "--format es" 具有相同的效果，并将覆盖所有输出的格式
const {
    isProd,
    BASE_CONFIGURATION_FILE_PATTERN,
    getExternalConfig,
} = require('./utils/env');
const merge = require('rollup-merge-config');

const start = async () => {
    const {
        options,
        warnings,
    } = await loadConfigFile(path.resolve(__dirname, BASE_CONFIGURATION_FILE_PATTERN), {format: 'es'});

    if (warnings.count) {
        console.warn(`We currently have ${warnings.count} warnings`);
    } else {
        console.info(`We currently have ${warnings.count} warnings`);
    }
    // 输出所有延迟的警告：
    // This prints all deferred warnings
    warnings.flush();
    // flush
    // 外部加载所有的文件
    const finalOption = merge(...options, ...await getExternalConfig());
    const bundle = await rollup.rollup(finalOption);
    await Promise.all(finalOption.output.map(bundle.write));
    // 你也可以将其直接传递给 "rollup.watch"
    (!isProd && rollup.watch(finalOption));
};
module.exports = start;

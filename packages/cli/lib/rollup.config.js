// const resolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const babel = require('rollup-plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const {nodeResolve: resolve} = require('@rollup/plugin-node-resolve');
const image = require('@rollup/plugin-image');
const alias = require('@rollup/plugin-alias');
const requireContext = require('rollup-plugin-require-context');
const postcss = require('rollup-plugin-postcss');
const svg = require('rollup-plugin-svg');
const url = require('rollup-plugin-url');
const path = require('path');
const {terser} = require('rollup-plugin-terser');
const livereload = require('rollup-plugin-livereload');
const copy = require('rollup-plugin-copy');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const typescript = require('rollup-plugin-typescript2');
const fs = require('fs');
const jsx = require('acorn-jsx');
const {isProd} = require('./utils/env');
const {defineConfig} = require('rollup');

const path_resolve = (...args) => path.resolve(process.cwd(), ...args);

module.exports = defineConfig({
    input: path_resolve('index.js'),
    external: [/@babel\/runtime/, 'vue'],
    acornInjectPlugins: [jsx()],
    output: [
        {
            dir: path_resolve('dist'),
            format: 'es',
            entryFileNames: chunk => `[name].mjs`,
        },
        {
            dir: path_resolve('dist'),
            format: 'cjs',
            exports: 'named',
            entryFileNames: chunk => `[name].cjs`,
        },
        {
            dir: path_resolve('dist'),
            format: 'umd',
            exports: 'named',
            entryFileNames: chunk => `[name].umd.js`,
        },
    ],
    plugins: [
        resolve({
            exclude: 'node_modules/**',
            mainFields: ['module', 'main', 'browser'],
        }),
        // commonjs({extensions, sourceMap: true}),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            presets: [
                [
                    require('@babel/preset-env'), {},
                ],
                [require('babel-preset-vue'), {}],
            ],
            extensions: ['.js', '.ts'],
        }),
        alias({}),
        copy({
            targets: [
                {src: 'public/*', dest: path_resolve('dist/static')},
            ],
        }),
        vue({}),
        postcss({
            extract: false,
            minimize: isProd,
            extensions: ['.css', '.less'],
        }),
        url({
            include: ['**/*.woff', '**/*.ttf'],
            limit: Infinity,
        }),
        image(),
        svg(),
        requireContext(),
        peerDepsExternal({
            includeDependencies: !isProd,
        }),
        (isProd && terser()),
        (!isProd && livereload()),
    ],
});

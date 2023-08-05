import {defineConfig} from 'vitepress';
import * as path from "path";
// .vitepress/theme/index.js
// https://vitepress.dev/reference/site-config
//@ts-ignore
export default defineConfig({
    title: "可视化组件",
    description: "A Awesome Graph Vis",
    outDir: path.join(__dirname, "..", 'dist'),
    srcDir: path.join(__dirname, "..", "docs"),
    head: [
        ['link', {rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css'}]
    ],
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: '样例', link: '/org'}
        ],
        sidebar: [
            {
                text: '组织结构图',
                link: '/org'
            },
            {
                text: "事件脉络图",
                link: '/event'
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/couriourc'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023-present CouriourC'
        }
    },
    markdown: {
        config: (md) => {
            // use more markdown-it plugins!
        }
    }
});

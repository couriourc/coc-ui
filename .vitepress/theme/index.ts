// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import type {EnhanceAppContext} from 'vitepress'
import axios from "axios";
import Org from "@vis/org";

export default {
    extends: DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        // register your custom global components
        ctx.app.config.globalProperties.$http = axios;
        ctx.app.use(Org)
        // console.log(ctx.app)
    },
};

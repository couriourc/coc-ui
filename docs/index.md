---
layout: home
hero:
    name: "CoC Vis"
    text: "a open source graph vis~"
    tagline: "user-friendly"
    actions:
        - theme: brand
          text: Get Start
        - theme: alt
          text: Give Me Issue

features:
  - title: Simplicity First🛠️
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered⚡️
    details: Enjoy the dev experience of                                                              Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant🌞
    details: VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
    footer: MIT Licensed | Copyright © 2019-present Evan You
---
<script setup>
import {ref,getCurrentInstance} from 'vue';
import axios from 'axios';
function useNewsListReq(){
    const newsList = ref();
    function getNewsList(){
      return axios.get('https://news.topurl.cn/api').then((data)=>{
        const _newsList = data.data.data.newsList;
        newsList.value = _newsList;
      });
    }
    getNewsList();
    return [newsList,getNewsList];
}
function toDetail(url){
  window.open(url)
}
const [newsList,refresh] = useNewsListReq();
</script>
<h1 class="font-bold text-xl text-center cursor-pointer" @click="refresh">
每日新闻<span class="inline-block text-xl i-carbon-update-now"></span>
</h1>
<figure v-for="news in newsList"
    :key="news.url"
    @click="toDetail(news.url)"
     class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border max-w-3xl m-auto my-2 cursor-pointer  hover:bg-slate-200">
  <div class="pt-6 w-full md:p-8 text-center md:text-left space-y-4">
    <blockquote class="m-auto max-w-3xl">
     <p class="text-lg font-bold flex"><span class="px-2 text-blue-500 bg-green inline-block cursor-pointer whitespace-nowrap">{{news.category}}</span> <span class="text-underline">{{news.title}}</span></p>
    </blockquote>
  </div>
</figure>


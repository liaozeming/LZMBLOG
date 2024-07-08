import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "人生如梦",
  description: "廖泽铭的博客",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.jpg",
    author: "廖泽铭",
    authorAvatar: "/head.jpg",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/blogs/algorithm/offer/": [
        {
          text: "剑指Offer",
          children: ["1","2","3","4",'5','6','7','8','9',"10","11","12","36","59","60","65"],
        },
      ],
      "/blogs/algorithm/hotLeetcode/": [
        {
          text: "热题100",
          children: ["1"],
        },
      ],
      "/blogs/algorithm/other/": [
        {
          text: "其他",
          children: ["1","2","3","4",'5','6','7','8','9',"10","11"
          ,"12","13","14","15","16","17"],
        },
      ],
      // "/blogs/algorithm/work/": [
      //   {
      //     text: "秋招",
      //     children: ["1",],
      //   },
      // ],
      "/blogs/applet/": [
        {
          text: "小程序开发记录",
          children: ["1","2","3","4","5"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      // { text: "分类", link: "/categories/reco/1/" },
      // { text: "标签", link: "/docs/theme-reco/home" },
      // {
      //   text: "文档",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
      { 
        text: "技术栈", link: "/blogs/background/1" ,
      },      
      { text: "算法",    
       children: [
          { text: "剑指Offer", link: "/blogs/algorithm/offer/1" },
          { text: "热题100", link: "/blogs/algorithm/hotLeetcode/1" },
          { text: "其他", link: "/blogs/algorithm/other/1" },
          { text: "秋招", link: "/blogs/algorithm/work/1" },
        ],
      },
      { text: "小程序",    
      children: [
         { text: "小程序开发", link: "/blogs/applet/1" },
       ],
     },
      { text: "关于我", link: "/blogs/about/me" },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
    commentConfig: {
      type: 'valine',
      options: {
        appId: '4OKgbgtn7ridXbX1fCKjZDp4-gzGzoHsz', // your appId
        appKey: 'XJNZBTGGzqXqtspNgPs7SDlj', // your appKey
        hideComments: false, // 全局隐藏评论，默认 false
      },
    },
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
  // debug: true,
});

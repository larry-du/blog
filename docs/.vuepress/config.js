import { defineUserConfig } from "vuepress-vite";
import { getDirname, path } from "@vuepress/utils";

import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { createRoute, createArticleSeries } from "../utils";
import { viteBundler } from "@vuepress/bundler-vite";

const __dirname = getDirname(import.meta.url);
console.log("__dirname", __dirname);

const navigationTarget = {
  nav: "nav",
  sidebar: "sidebar",
};

const articleSeries = createArticleSeries();

const navRoute = articleSeries.map(({ pathName, navName }) => {
  return {
    text: navName,
    children: createRoute(pathName, navigationTarget.nav),
  };
});
// const sidebar = articleSeries.map(({ pathName, navName }) => {
//   return {
//     text: navName,
//     collapsible: true,
//     children: createRoute(pathName, navigationTarget.sidebar),
//   };
// });

export default defineUserConfig({
  base: "/",
  lang: "zh-TW",
  title: "才能是拿來浪費的",
  description: "Larry Blog",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://avatars.githubusercontent.com/u/58778998?v=4",
      },
    ],
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: "G-WGY2TQ6NB3",
    }),
    searchPlugin({
      isSearchable: (page) => page.path !== "/",
      locales: {
        "/": {
          placeholder: "文章搜尋",
        },
      },
      maxSuggestions: 15,
    }),
  ],
  markdown: {
    anchor: true,
  },
  theme: defaultTheme({
    navbar: navRoute,
    // sidebar: sidebar,
    // sidebarDepth: 0,
    logo: "https://i.imgur.com/xOpYEzi.png",
    logoDark: "https://i.imgur.com/OPowSp7.png",
    repo: "https://github.com/larry-du",
    editLink: false,
  }),
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "demoComponent"),
        },
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            const customElement = ["font"];
            return customElement.includes(tag);
          },
        },
      },
    },
  }),
});

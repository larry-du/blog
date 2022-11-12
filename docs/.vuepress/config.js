import { defineUserConfig } from "vuepress-vite";
import { path } from "@vuepress/utils";
import { defaultTheme } from "@vuepress/theme-default";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { createRoute, createArticleSeries } from "../utils";

const articleSeries = createArticleSeries();

const navRoute = articleSeries.map((navConfig) => {
  return createRoute(navConfig);
});

export default defineUserConfig({
  base: "/",
  lang: "zh-TW",
  title: "技能是拿來浪費的",
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
      id: "G-V62PJVW3S1",
    }),
  ],
  alias: {
    "@": path.resolve(__dirname, "../../src"),
  },
  theme: defaultTheme({
    navbar: navRoute,
    sidebarDepth: 2,
    logo: "https://i.imgur.com/xOpYEzi.png",
    logoDark: "https://i.imgur.com/OPowSp7.png",
    repo: "https://github.com/larry-du",
    editLink: false,
  }),
});

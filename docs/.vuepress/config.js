import { defineUserConfig } from "vuepress-vite";
import { path } from "@vuepress/utils";
import { defaultTheme } from "@vuepress/theme-default";
import { createRoute, createArticleSeries } from "../utils";

const articleSeries = createArticleSeries();

const navRoute = articleSeries.map((navConfig) => {
  return createRoute(navConfig);
});

export default defineUserConfig({
  base: "/",
  lang: "zh-TW",
  title: "部落格測試",
  description: "才能是拿來浪費的",
  head: [["link", { rel: "icon", href: "/images/circle.png" }]],
  alias: {
    "@": path.resolve(__dirname, "../../src"),
  },
  theme: defaultTheme({
    navbar: navRoute,
    sidebarDepth: 2,
  }),
});

[{ text: "", children: [{ text: "", link: "" }] }];

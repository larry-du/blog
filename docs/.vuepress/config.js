import { defineUserConfig } from "vuepress-vite";
import { path } from "@vuepress/utils";
import { defaultTheme } from "@vuepress/theme-default";
import { getNavConfig } from "../utils/getNavConfig";
// console.log(getNavConfig("Vuepress", ""));
export default defineUserConfig({
  base: "/",
  lang: "zh-TW",
  title: "部落格測試",
  description: "blog",
  head: [["link", { rel: "icon", href: "/images/circle.png" }]],
  alias: {
    "@": path.resolve(__dirname, "../../src"),
    // "@@": path.resolve(__dirname, "./theme"),
  },
  theme: defaultTheme({
    navbar: [...getNavConfig("技術系列", "Technical")],
  }),
});

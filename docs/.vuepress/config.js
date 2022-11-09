import { defineUserConfig } from "vuepress-vite";
import { path } from "@vuepress/utils";
import { defaultTheme } from "@vuepress/theme-default";

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
    navbar: [
      // NavbarItem
      {
        text: "Home",
        link: "/",
      },
      {
        text: "last",
        link: "/last/hello",
      },
      // NavbarGroup
      {
        text: "Group",
        children: [{ text: "test", link: "/group/foo" }, "/group/bar"],
      },
      // string - page file path
      //   "README.md",
    ],
  }),
});

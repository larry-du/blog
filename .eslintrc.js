module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true, // vue composition api defineProps defineEmits
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended", //使用 prettier 規則
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "espree",
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", //禁用 console
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", //禁用 debugger
    "vue/require-default-prop": "off", // 關閉 prop 無設定 default值
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
  },
};

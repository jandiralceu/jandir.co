import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      jest: eslintPluginJest,
    },
    settings: {
      react: {
        version: "detect",
      },
      jest: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "public/",
      "node_modules/",
      "static/",
      "**/*.d.ts",
      ".cache/",
      ".gitignore",
      "yarn.lock",
      ".nvmrc",
      "__mocks__/",
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  eslintPluginJest.configs["flat/recommended"],
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

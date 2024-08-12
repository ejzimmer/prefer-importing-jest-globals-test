import jestPlugin from "eslint-plugin-jest";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*tests.{ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      globals: {
        ...jestPlugin.environments.globals.globals,
        ...globals.node,
      },
    },

    plugins: { jest: jestPlugin },

    rules: {
      "jest/prefer-importing-jest-globals": "error",
    },
  },
];

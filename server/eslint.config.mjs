import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Parsers and plugins
import jsParser from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin-js";

// Set up __dirname for ESM.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a FlatCompat instance to convert legacy configs.
const compat = new FlatCompat({ baseDirectory: __dirname });

// Convert legacy TS recommended config into flat config objects.
const tsConfigs = compat
    .extends("plugin:@typescript-eslint/recommended")
    .map(cfg => ({ ...cfg, files: ["**/*.ts", "**/*.tsx"] }));

export default [
  // --- JavaScript configuration ---
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: jsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  jsParser.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // Required for rules that need type information.
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
  },
  // Spread in TS recommended configs.
  ...tsConfigs,

  // --- Global stylistic rules ---
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      stylistic,
    },
    rules: {
      "stylistic/indent": ["error", 2],
      "stylistic/quotes": ["error", "double"],
      "stylistic/semi": ["error", "always"],
      "stylistic/arrow-parens": ["error", "always"],
      "stylistic/brace-style": ["error", "1tbs"],
      "stylistic/quote-props": ["error", "as-needed"],
      "stylistic/comma-dangle": ["error", "only-multiline"],
    },
  },
];

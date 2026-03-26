import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  // 1. يجب أن يكون هذا الكائن هو الأول تماماً
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
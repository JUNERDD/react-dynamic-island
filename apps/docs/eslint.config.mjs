import baseConfig from "@repo/config/eslint";

const eslintConfig = [
  ...baseConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    ignores: [
      // Nextra specific files
      "theme.config.tsx",
      "**/_meta.ts",
      // Third-party libraries
      "public/_pagefind/**",
      "node_modules/**",
    ],
  },
];

export default eslintConfig;

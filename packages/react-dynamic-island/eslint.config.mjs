import baseConfig from '@repo/config/eslint'

const eslintConfig = [
  ...baseConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off'
    }
  }
]

export default eslintConfig

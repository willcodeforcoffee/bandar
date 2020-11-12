module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-console": "warn"
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

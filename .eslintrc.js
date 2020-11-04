'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const config = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'xo/esnext',
    require.resolve('xo/config/plugins'),
    'xo-react',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    'prettier/react',
    'silent',
    'silent/import',
    'silent/prettier',
    'silent/unicorn',
    'silent/react',
  ],
  ignorePatterns: ['dist', 'coverage', 'lib', 'node_modules'],
  rules: {
    'max-params': 'off',
    'no-console': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],
    'unicorn/prevent-abbreviations': 'off',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.scss'],
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['xo-typescript', 'prettier/@typescript-eslint', 'silent/@typescript-eslint',],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'unicorn/import-style': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};

module.exports = config;

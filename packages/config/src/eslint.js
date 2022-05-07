const path = require('path')

const resolveDir = (dir) => path.resolve(__dirname, dir)
const resolveRoot = (dir = '') => resolveDir(path.join('../../../', dir))

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: resolveRoot(),
    project: [
      resolveRoot('./tsconfig.eslint.json'),
      resolveRoot('./packages/*/tsconfig.json'),
    ],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-await-in-loop': 0,
    'prefer-destructuring': 0,
    'no-bitwise': 0,
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent'],
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    '@typescript-eslint/consistent-type-imports': 2,
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',
    'import/prefer-default-export': 'off',
    'tsdoc/syntax': 'warn',
  },
  // Disable no-unused-expressions to allow chai 'expect' expressions in testing
  overrides: [
    {
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
}

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb-base', 'plugin:eslint-comments/recommended', 'prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-shadow': 'off',
    'no-param-reassign': 'off',
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
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-await-in-loop': 0,
    'no-bitwise': 0,
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

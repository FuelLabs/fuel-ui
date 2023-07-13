const config = require('@fuels/eslint-config');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/namespace': [2, { allowComputed: true }],
  },
  settings: {
    ...config.settings,
    'import/resolver': {
      ...config.settings['import/resolver'],
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json', '**/**/tsconfig.json'],
      },
    },
  },
};

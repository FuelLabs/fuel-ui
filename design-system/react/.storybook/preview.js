import '@fontsource/inter/variable.css';
import '@fontsource/raleway/variable.css';

import { themes } from '@storybook/theming';

import theme from './theme';

import { darkTheme, theme as lightTheme } from '@fuel/css';
import { GlobalStyles } from '../src/styles/GlobalStyles';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Base', 'Overlay', 'UI'],
    },
  },
  darkMode: {
    stylePreview: true,
    dark: {
      ...themes.dark,
      ...theme,
    },
    light: {
      ...themes.light,
      ...theme,
    },
    darkClass: darkTheme.className,
    lightClass: lightTheme.className,
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

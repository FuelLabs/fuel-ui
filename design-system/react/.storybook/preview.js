import '@fontsource/inter/variable.css';
import '@fontsource/raleway/variable.css';
import { useDarkMode } from 'storybook-dark-mode';

import { themes } from '@storybook/theming';

import theme from './theme';

import { darkTheme, theme as lightTheme } from '@fuel/css';
import { ThemeProvider, useFuelTheme } from '../src';
import { useEffect } from 'react';

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
      order: ['Base', 'Form', 'Overlay', 'UI'],
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

function ThemeWrapper(props) {
  const isDark = useDarkMode();
  const { setTheme } = useFuelTheme();

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return <ThemeProvider>{props.children}</ThemeProvider>;
}

export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];

import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { withTests } from '@storybook/addon-jest';
import { themes } from '@storybook/theming';
import { darkTheme, lightTheme } from '@fuel-ui/css';

import results from '../.jest-test-results.json';
import { ThemeProvider, useFuelTheme } from '../src';
import theme from './theme';

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
  withTests({
    results,
  }),
  (Story) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];

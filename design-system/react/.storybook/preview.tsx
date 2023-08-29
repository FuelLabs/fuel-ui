import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { darkTheme, lightTheme, loadIcons, setFuelThemes } from '../src';

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
      appBg: '#101010',
      barBg: '#151515',
    },
    light: {
      ...themes.light,
      ...theme,
    },
    darkClass: darkTheme.theme.className,
    lightClass: lightTheme.theme.className,
  },
};

loadIcons('/public/icons/sprite.svg');
setFuelThemes({
  initial: 'docs',
  themes: {
    dark: darkTheme,
    light: lightTheme,
  },
});

function ThemeWrapper(props: any) {
  const isDark = useDarkMode();
  const { setTheme } = useFuelTheme();

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return <ThemeProvider>{props.children}</ThemeProvider>;
}

export const decorators = [
  (Story: any) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];

import React from 'react';
import {
  darkTheme,
  lightTheme,
  loadIcons,
  setFuelThemes,
  ThemeProvider,
  useFuelTheme,
} from '../../src';

export const withThemeDecorator = (Story: any, ctx: any) => {
  const isDark = localStorage.getItem('fuel-ui-theme') === 'dark';
  const { setTheme } = useFuelTheme();

  React.useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return <ThemeProvider>{Story()}</ThemeProvider>;
};

loadIcons('/public/icons/sprite.svg');
setFuelThemes({
  themes: {
    dark: darkTheme,
    light: lightTheme,
  },
});

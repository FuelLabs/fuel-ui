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
    if (isDark) {
      document.documentElement.classList.add('fuel_dark-theme');
      document.documentElement.classList.remove('fuel_light-theme');
    } else {
      document.documentElement.classList.add('fuel_light-theme');
      document.documentElement.classList.remove('fuel_dark-theme');
    }
  }, [isDark]);

  return <ThemeProvider>{Story()}</ThemeProvider>;
};

loadIcons('/public/icons/sprite.svg');
setFuelThemes({
  initial: 'light',
  themes: {
    dark: darkTheme,
    light: lightTheme,
  },
});

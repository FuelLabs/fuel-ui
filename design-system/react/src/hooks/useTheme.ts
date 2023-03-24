import type { CSSFnParams } from '@fuel-ui/css';
import { _createTheme, darkColors, lightColors } from '@fuel-ui/css';
import { createContext, useContext } from 'react';

import type { StoreDefs } from '../types';

type DefKeys = keyof StoreDefs;
type ComponentProps<K extends DefKeys> = {
  defaultProps?: Partial<StoreDefs[K]['props']>;
  styles?: Partial<
    StoreDefs[K]['styles'] extends string
      ? Record<StoreDefs[K]['styles'], CSSFnParams>
      : never
  >;
};

type Tokens = Parameters<typeof _createTheme>[1];
export type ThemeOverride = {
  tokens: Tokens;
  components?: {
    [K in DefKeys]?: ComponentProps<K>;
  };
};

export function createTheme(name: string, override: ThemeOverride) {
  const theme = _createTheme(name, override.tokens);
  return { theme, components: override.components };
}

export const THEME_STORAGE_KEY = 'fuel-ui-theme';
export function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const theme = localStorage.getItem(THEME_STORAGE_KEY);
  if (theme) return theme;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export const lightTheme = createTheme('fuel_light-theme', {
  tokens: {
    colors: lightColors,
  },
});

export const darkTheme = createTheme('fuel_dark-theme', {
  tokens: {
    colors: darkColors,
  },
});

export const DEFAULT_THEMES = {
  dark: darkTheme,
  light: lightTheme,
};

export type FuelTheme = ReturnType<typeof createTheme>;
export type ThemesObj = Record<string, FuelTheme>;

type Context = {
  setTheme: (theme: FuelTheme) => void;
  themes: Record<string, FuelTheme>;
  current: string;
};

export const themeContext = createContext<Context>({
  setTheme: () => null,
  themes: DEFAULT_THEMES,
  current: getInitialTheme(),
} as Context);

export function useFuelTheme() {
  return useContext(themeContext);
}

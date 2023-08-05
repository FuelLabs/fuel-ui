import { createContext, useContext } from 'react';
import { mergeDeep } from '~/utils';

import { useStore } from './useStore';
import { THEME_STORAGE_KEY, type ThemesObj } from './useTheme';

type Context = {
  setTheme: (theme: string) => void;
  themes: ThemesObj;
  current: string;
};

export const themeContext = createContext<Context>({
  setTheme: useStore.getState().setTheme,
  themes: useStore.getState().themes,
  current: useStore.getState().theme,
} as Context);

export function useFuelTheme() {
  return useContext(themeContext);
}

export function setFuelThemes<T extends ThemesObj>(themes: T) {
  useStore.setState({ themes });
  saveThemeProps(useStore.getState().theme);
}

useStore.subscribe(
  (state) => state.theme,
  (current, previous) => {
    if (current === previous) return;
    saveThemeProps(current);
  },
);

function saveThemeProps(current: string) {
  const themes = useStore.getState().themes;
  localStorage.setItem(THEME_STORAGE_KEY, current);
  const html = document.documentElement;
  html.classList.add(themes[current]?.theme);
  Object.keys(themes).forEach((key) => {
    if (key === current) return;
    const className = themes[key];
    const html = document.documentElement;
    const contains = html.classList.contains(className.theme.toString());
    contains && html.classList.remove(className.theme.toString());
  });

  const components = themes[current]?.components || {};
  const store = useStore.getState();
  Object.entries(components ?? {}).forEach(([key, value]) => {
    const curr = store.defs[key];
    const next = mergeDeep(curr, value);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store.addDef(key as any, next);
  });
}

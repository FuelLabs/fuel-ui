import { mergeDeep } from '~/utils';

import { useStore } from './useStore';
import { THEME_STORAGE_KEY, getInitialTheme, type ThemesObj } from './useTheme';

export function useFuelTheme() {
  const store = useStore();
  return {
    current: store.theme,
    themes: store.themes,
    setTheme: store.setTheme,
  };
}

export function setFuelThemes<T extends ThemesObj>({
  themes,
  initial,
}: {
  themes: T;
  initial?: string;
}) {
  const init = initial ?? getInitialTheme(Object.keys(themes));
  useStore.setState({ themes, theme: init });
  saveThemeProps(init);
}

export function loadIcons(url: string) {
  useStore.setState({ iconUrl: url });
}

useStore.subscribe(
  (state) => state.theme,
  (current, previous) => {
    if (current === previous) return;
    saveThemeProps(current);
  },
);

function saveThemeProps(current: string) {
  if (typeof window === 'undefined') return;
  const themes = useStore.getState().themes;
  const themeObj = themes?.[current];
  localStorage.setItem(THEME_STORAGE_KEY, current);
  const html = document.documentElement;
  html.classList.add(themeObj?.theme);

  Object.keys(themes).forEach((key) => {
    if (key === current) return;
    const className = themes?.[key];
    if (!className) return;
    const html = document.documentElement;
    const contains = html.classList.contains(className?.theme.toString());
    contains && html.classList.remove(className?.theme.toString());
  });

  const components = themeObj?.components || {};
  const store = useStore.getState();
  Object.entries(components ?? {}).forEach(([key, value]) => {
    const curr = store.defs[key];
    const next = mergeDeep(curr, value);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store.addDef(key as any, next);
  });
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { _createTheme, css } from '@fuel-ui/css';
import type { CSSFnParams } from '@fuel-ui/css';
import { useMemo } from 'react';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { StoreDefs } from '~/defs';
import { fClass } from '~/utils/css';

import { DEFAULT_THEMES, getInitialTheme, type ThemesObj } from './useTheme';

type DefKeys = keyof StoreDefs;
type CSSFnReturn = ReturnType<typeof css>;

type ComponentDef<K extends DefKeys> = {
  name: K;
  defaultProps?: StoreDefs[K]['props'];
  styles: StoreDefs[K]['styles'] extends string
    ? Record<StoreDefs[K]['styles'], CSSFnParams>
    : never;
};

type StoreDefitions = {
  [K in DefKeys]: ComponentDef<K>;
};

type StoreStyles = {
  [K in DefKeys]: StoreDefs[K]['styles'] extends string
    ? Record<StoreDefs[K]['styles'], CSSFnReturn>
    : never;
};

type Store = {
  iconUrl?: string;
  defs: StoreDefitions;
  styles: StoreStyles;
  addDef<K extends DefKeys>(name: K, def: ComponentDef<K>): void;
  theme: string;
  themes: ThemesObj;
  setTheme: (theme: string) => void;
  setThemes: (themes: ThemesObj) => void;
};

export const useStore = create(
  subscribeWithSelector<Store>((set) => ({
    theme: getInitialTheme(),
    themes: DEFAULT_THEMES,
    setTheme: (theme) => set({ theme }),
    setThemes: (themes) => {
      set({ themes });
    },
    defs: {} as StoreDefitions,
    styles: {} as StoreStyles,
    addDef<K extends DefKeys>(name: K, def: ComponentDef<K>) {
      set((state) => ({
        defs: {
          ...state.defs,
          [name]: def,
        },
      }));

      const styles = def.styles;
      Object.entries(styles).forEach(([def, val]) => {
        const fn = css.withConfig({ componentId: def, displayName: name });
        set((state) => ({
          styles: {
            ...state.styles,
            [name]: {
              ...state.styles[name],
              [def]: fn(val as any),
            },
          },
        }));
      });
    },
  })),
);

type Style<K extends DefKeys> = ReturnType<typeof createStyle<K>>;

export function createStyle<K extends DefKeys>(
  name: K,
  styles: StoreDefs[K]['styles'] extends string
    ? Record<StoreDefs[K]['styles'], CSSFnParams>
    : never,
) {
  const state = useStore.getState();
  const newItem = { name, styles };
  state.addDef(name, newItem);
  return newItem;
}

export function useStyles<K extends DefKeys, F>(
  style: Style<K>,
  props: Record<any, any> = {},
  filter?: F extends string[] ? F : any[],
) {
  type Classes = StoreDefs[K]['styles'] extends string
    ? Record<StoreDefs[K]['styles'], { className: string }>
    : never;

  const store = useStore();
  function generateClasses() {
    const styles = store.styles[style.name];
    return Object.entries(styles).reduce((obj, [def, fn]: [string, any]) => {
      if (filter?.length && !filter?.includes(def)) return obj;
      const comp = fn(props);
      comp.selector = fClass(style.name, def);
      return {
        ...obj,
        [def]: { className: comp.className },
      };
    }, {} as Classes);
  }
  return useMemo(() => generateClasses(), [props]);
}

import { css } from '@fuel-ui/css';
import type { ThemeUtilsCSS, CSSFnParams } from '@fuel-ui/css';
import { deepEqual } from 'fast-equals';
import { useMemo, useRef } from 'react';
import { create } from 'zustand';

import { useFuelTheme } from './useTheme';

import type { StoreDefs } from '~/types';
import { fClass } from '~/utils/css';
import { mergeDeep } from '~/utils/helpers';

type DefKeys = keyof StoreDefs;
type CSSFnReturn = ReturnType<typeof css>;
type CompStyles<K extends DefKeys> = {
  [P in StoreDefs[K]['styles'] as string]: CSSFnParams;
};
type CompClasses<K extends DefKeys> = {
  [P in StoreDefs[K]['styles'] as string]: string;
};

type ComponentDef<K extends DefKeys> = {
  name: K;
  defaultProps: StoreDefs[K]['props'];
  styles: CompStyles<K>;
};

type StoreDefitions = {
  [K in DefKeys]: ComponentDef<K>;
};

type StoreStyles = {
  [K in DefKeys]: {
    [P in StoreDefs[K]['styles'] as string]: CSSFnReturn;
  };
};

type Store = {
  defs: StoreDefitions;
  styles: StoreStyles;
  addDef<K extends DefKeys>(name: K, def: ComponentDef<K>): void;
};

export const useStore = create<Store>((set) => ({
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
            [def]: fn(val),
          },
        },
      }));
    });
  },
}));

type Style<K extends DefKeys> = ReturnType<typeof createStyle<K>>;
type Props<K extends DefKeys> = StoreDefs[K]['props'] & {
  css?: ThemeUtilsCSS;
};

export function createStyle<K extends DefKeys>(name: K, styles: CompStyles<K>) {
  const state = useStore.getState();
  const newItem = { defaultProps: {}, name, styles };
  state.addDef(name, newItem);
  return newItem;
}

function useMemoizedValue<P>(value: P) {
  const ref = useRef(value);
  if (!deepEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function useComponentProps<K extends DefKeys>(name: K, props: Props<K>) {
  const theme = useFuelTheme();
  const currTheme = theme.themes[theme.current];
  const defaultProps = currTheme.components?.[name]?.defaultProps ?? {};
  return useMemoizedValue(
    mergeDeep<StoreDefs[K]['props']>(defaultProps, props)
  );
}

export function useStyles<K extends DefKeys>(
  style: Style<K>,
  props: Partial<Props<K>>
) {
  const store = useStore();
  function generateClasses() {
    const styles = store.styles[style.name];
    return Object.entries(styles).reduce((obj, [def, fn]) => {
      const comp = fn(props);
      comp.selector = fClass(style.name, def);
      return {
        ...obj,
        [def]: comp,
      };
    }, {} as CompClasses<K>);
  }

  return useMemo(() => generateClasses(), [props]);
}

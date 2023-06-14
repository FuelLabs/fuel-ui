/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, cx } from '@fuel-ui/css';
import type { ThemeUtilsCSS, CSSFnParams } from '@fuel-ui/css';
import { useMemo } from 'react';
import { mergeProps } from 'react-aria';
import { create } from 'zustand';

import { useFuelTheme } from './useTheme';

import type { StoreDefs } from '~/defs';
import { fClass } from '~/utils/css';
import { mergeDeep, omit } from '~/utils/helpers';

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
            [def]: fn(val as any),
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

export function useComponentProps<K extends DefKeys>(name: K, props: Props<K>) {
  const theme = useFuelTheme();
  const currTheme = theme.themes[theme.current];
  const defaultProps = currTheme?.components?.[name]?.defaultProps ?? {};
  return mergeDeep<StoreDefs[K]['props']>(defaultProps, props);
}

export function createStyle<K extends DefKeys>(
  name: K,
  styles: StoreDefs[K]['styles'] extends string
    ? Record<StoreDefs[K]['styles'], CSSFnParams>
    : never
) {
  const state = useStore.getState();
  const newItem = { name, styles };
  state.addDef(name, newItem);
  return newItem;
}

export function useStyles<K extends DefKeys, F>(
  style: Style<K>,
  props: Partial<Props<K>> = {},
  filter?: F extends string[] ? F : any[]
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

const OMIT_FOR_DOM = [
  'as',
  'direction',
  'align',
  'justify',
  'wrap',
  'basis',
  'grow',
  'shrink',
  'gap',
  'status',
  'variant',
  'color',
  'size',
  'css',
  'isDisabled',
  'onPress',
  'isLoading',
  'isDisabled',
  'isLink',
  'leftIcon',
  'leftIconAriaLabel',
  'rightIcon',
  'rightIconAriaLabel',
  'minWS',
  'minHS',
  'justIcon',
  'iconSize',
];

export function useElementProps<P extends any[]>(...props: P): P[0] {
  const allClasses = cx(props.map((p) => p?.className ?? {}));
  const res = omit(OMIT_FOR_DOM, mergeProps<P>(...props) as any) as P[0];
  const classNameArr = allClasses?.split(' ') ?? [];
  const className = Array.from(new Set(classNameArr)).join(' ');
  const disabled = props.some((p) => p?.isDisabled || p?.isLoading);
  return {
    ...res,
    className,
    ...(disabled && {
      'aria-disabled': true,
      disabled: true,
    }),
  };
}

import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { css, createStyleStore } from '@fuel-ui/css';

import { useFuelTheme } from './useTheme';

import type { StoreDefs } from '~/types';
import { fClass } from '~/utils/css';
import { mergeDeep } from '~/utils/helpers';

export const store = createStyleStore<StoreDefs>();

type Style<K extends keyof StoreDefs> = ReturnType<typeof createStyle<K>>;
type Styles<K extends keyof StoreDefs> = Record<
  StoreDefs[K]['styles'],
  ThemeUtilsCSS
>;
type Props<K extends keyof StoreDefs> = StoreDefs[K]['props'] & {
  css?: ThemeUtilsCSS;
};

export function createStyle<K extends keyof StoreDefs>(
  name: K,
  styles: Styles<K>
) {
  const newItem = { defaultProps: {}, name, styles };
  store.state[name] = newItem;
  return newItem;
}

export function useComponentProps<K extends keyof StoreDefs>(
  name: K,
  props: Props<K>
) {
  const theme = useFuelTheme();
  const currTheme = theme.themes[theme.current];
  const defaultProps = currTheme.components?.[name]?.defaultProps ?? {};
  return mergeDeep<StoreDefs[K]['props']>(defaultProps, props);
}

export function useClasses<K extends keyof StoreDefs>(
  style: Style<K>,
  styleProps: Props<K>
) {
  const componentDef = store.useState()[style.name];
  const { name, styles } = componentDef;
  const classes = Object.entries(styles).reduce(
    (acc, [def, val]) => {
      const cssFN = css.withConfig({ componentId: def, displayName: name });
      const style = cssFN(val);
      const className = style(styleProps);
      className.selector = fClass(style.name, def);
      return { ...acc, [def]: className };
    },
    {} as {
      [S in StoreDefs[K]['styles']]: string;
    }
  );
  return classes;
}

export function useBaseClass<K extends keyof StoreDefs>(name: K) {
  return fClass(name);
}

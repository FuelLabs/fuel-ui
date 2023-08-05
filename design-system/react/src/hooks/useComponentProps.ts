import type { ThemeUtilsCSS } from '@fuel-ui/css';
import type { StoreDefs } from '~/defs';
import { mergeDeep } from '~/utils/helpers';

import { useFuelTheme } from './useThemeContext';

type DefKeys = keyof StoreDefs;

type Props<K extends DefKeys> = StoreDefs[K]['props'] & {
  css?: ThemeUtilsCSS;
};

export function useComponentProps<K extends DefKeys>(name: K, props: Props<K>) {
  const { current, themes } = useFuelTheme();
  const currTheme = themes[current];
  const defaultProps = currTheme?.components?.[name]?.defaultProps ?? {};
  return mergeDeep<StoreDefs[K]['props']>(defaultProps, props);
}

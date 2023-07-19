import type { ThemeUtilsCSS } from '@fuel-ui/css';

import type { FlexProps } from './defs';
import { styles } from './styles';

import { useStyles } from '~/hooks';

export function useFlexProps(props: FlexProps, css?: ThemeUtilsCSS) {
  const { direction, align, justify, wrap, basis, grow, shrink, gap } = props;
  return useStyles(styles, {
    css: {
      gap,
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      flexBasis: basis,
      flexGrow: grow,
      flexShrink: shrink,
      display: 'flex',
      ...css,
    },
  });
}

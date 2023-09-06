import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { useStyles } from '~/hooks';

import type { FlexProps } from '../components/Box/defs';
import { styles } from '../components/Box/styles';

export function useFlexProps(props: FlexProps, css?: ThemeUtilsCSS) {
  const { direction, align, justify, wrap, basis, grow, shrink, gap } = props;
  return useStyles(styles, {
    ...props,
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

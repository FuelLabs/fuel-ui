import { css, cx } from '@fuel-ui/css';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';

export type BoxProps = HTMLProps['div'];

export const Box = createComponent<BoxProps>(
  ({ as = 'div', className, children, ...props }) => {
    const classes = cx('fuel_Box', className);
    return createStyledElement(
      as,
      styles.root,
      null,
      { ...props, className: classes },
      children
    );
  }
);

const styles = {
  root: css({
    fontFamily: '$sans',
  }),
};

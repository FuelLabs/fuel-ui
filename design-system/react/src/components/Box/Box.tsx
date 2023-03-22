import { cx } from '@fuel-ui/css';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import type { BoxProps } from './types';

import {
  createStyle,
  useComponentProps,
  useElementProps,
  useStyles,
} from '~/hooks';
import { Components } from '~/types';

export const Box = createComponent<BoxProps>(({ as = 'div', ...initProps }) => {
  const props = useComponentProps(Components.Box, initProps);
  const classes = useStyles(styles, props);
  const elementProps = useElementProps(props, {
    className: cx(props.className, classes.root),
  });
  return createElement(as, elementProps);
});

const styles = createStyle(Components.Box, {
  root: {
    fontFamily: '$sans',
  },
});

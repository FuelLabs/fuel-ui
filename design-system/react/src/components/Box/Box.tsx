/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const _Box = createComponent2<t.BoxDef>(
  Components.Box,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(as, elementProps);
  }
);

export const Box = createPolymorphicComponent<t.BoxDef>(_Box);

const styles = createStyle(Components.Box, {
  root: {
    fontFamily: '$sans',
  },
});

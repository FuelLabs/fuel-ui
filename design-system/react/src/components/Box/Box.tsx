import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import { BoxCentered } from './BoxCentered';
import { Container } from './Container';
import { Flex } from './Flex';
import { Stack } from './Stack';
import type * as t from './defs';
import { styles } from './styles';

const _Box = _unstable_createComponent<t.BoxDef>(
  Components.Box,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(as, elementProps);
  },
);

export const Box = createPolymorphicComponent<t.BoxDef>(_Box);
Box.Centered = BoxCentered;
Box.Flex = Flex;
Box.Stack = Stack;
Box.Container = Container;

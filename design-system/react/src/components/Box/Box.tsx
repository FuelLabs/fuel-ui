/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import { BoxCentered } from './BoxCentered';
import { Container } from './Container';
import { Flex } from './Flex';
import { Stack } from './Stack';
import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
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
Box.Centered = BoxCentered;
Box.Flex = Flex;
Box.Stack = Stack;
Box.Container = Container;

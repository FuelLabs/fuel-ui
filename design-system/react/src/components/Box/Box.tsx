import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
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
    return _unstable_createEl(as, { ...props, ...classes.root });
  },
);

export const Box = createPolymorphicComponent<t.BoxDef>(_Box);

Box.Centered = BoxCentered;
Box.Flex = Flex;
Box.Stack = Stack;
Box.Container = Container;

/* eslint-disable @typescript-eslint/naming-convention */
import { createComponent2, createPolymorphicComponent } from '../../utils';
import { Flex } from '../Flex';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _Stack = createComponent2<t.StackDef>(
  Components.Stack,
  ({ gap = '$2', direction = 'column', ...props }) => {
    const classes = useStyles(styles, { ...props, gap, direction });
    const elementProps = useElementProps(props, classes.root);
    return <Flex {...elementProps} gap={gap} direction={direction} />;
  }
);

export const Stack = createPolymorphicComponent<t.StackDef>(_Stack);

const styles = createStyle(Components.Stack, {
  root: {
    display: 'flex',
  },
});

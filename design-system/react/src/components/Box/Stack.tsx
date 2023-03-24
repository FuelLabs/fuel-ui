/* eslint-disable @typescript-eslint/naming-convention */
import { createComponent2, createPolymorphicComponent } from '../../utils';

import { Flex } from './Flex';
import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _Stack = createComponent2<t.StackDef>(
  Components.Stack,
  ({ gap = '$2', direction = 'column', ...props }) => {
    const classes = useStyles(styles, {
      ...props,
      css: {
        gap,
        flexDirection: direction,
      },
    });
    const elementProps = useElementProps(props, classes.stack);
    return <Flex {...elementProps} gap={gap} direction={direction} />;
  }
);

export const Stack = createPolymorphicComponent<t.StackDef>(_Stack);

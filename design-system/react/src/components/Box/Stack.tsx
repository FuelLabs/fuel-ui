/* eslint-disable @typescript-eslint/naming-convention */
import { createComponent2, createPolymorphicComponent } from '../../utils';

import { Flex } from './Flex';
import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

const _Stack = createComponent2<t.StackDef>(
  Components.Stack,
  ({ gap = '$2', direction = 'column', ...props }) => {
    const classes = useStyles(styles, {
      ...props,
      css: {
        gap,
        flexDirection: direction,
        ...props.css,
      },
    });
    const elementProps = useElementProps(props, classes.stack);
    return <Flex {...elementProps} gap={gap} direction={direction} />;
  }
);

export const Stack = createPolymorphicComponent<t.StackDef>(_Stack);

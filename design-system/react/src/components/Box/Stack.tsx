import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import { Flex } from './Flex';
import type * as t from './defs';
import { styles } from './styles';

export type StackProps = t.StackProps;

const _Stack = _unstable_createComponent<t.StackDef>(
  Components.Stack,
  (props) => {
    const {
      direction = 'column',
      align,
      justify,
      wrap,
      basis,
      grow,
      shrink,
      gap = '$2',
    } = props;
    const classes = useStyles(styles, {
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
        ...props.css,
      },
    });
    const elementProps = useElementProps(props, classes.stack);
    return (
      <Flex {...elementProps} as={props.as} gap={gap} direction={direction} />
    );
  },
);

export const Stack = createPolymorphicComponent<t.StackDef>(_Stack);

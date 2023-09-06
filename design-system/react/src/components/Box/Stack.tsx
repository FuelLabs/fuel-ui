import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';

export type StackProps = t.StackProps;

const _Stack = _unstable_createComponent<t.StackDef>(
  Components.Stack,
  ({ as = 'div', css, ...props }) => {
    const classes = useFlexProps(props, css);
    return _unstable_createEl(as, { ...props, ...classes.stack });
  },
);

export const Stack = createPolymorphicComponent<t.StackDef>(_Stack);

Stack.defaultProps = {
  gap: '$2',
  direction: 'column',
};

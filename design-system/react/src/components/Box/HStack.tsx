import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';

export type HStackProps = t.HStackProps;

const _HStack = _unstable_createComponent<t.HStackDef>(
  Components.HStack,
  ({ as = 'div', css, ...props }) => {
    const classes = useFlexProps(props, css);
    return _unstable_createEl(as, { ...props, ...classes.hstack });
  },
);

export const HStack = createPolymorphicComponent<t.HStackDef>(_HStack);

HStack.id = Components.HStack;
HStack.defaultProps = {
  gap: '$2',
};

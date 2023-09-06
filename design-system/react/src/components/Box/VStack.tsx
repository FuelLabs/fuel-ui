import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';

export type VStackProps = t.VStackProps;

const _VStack = _unstable_createComponent<t.VStackDef>(
  Components.VStack,
  ({ as = 'div', css, ...props }) => {
    const classes = useFlexProps(props, { ...css, flexDirection: 'column' });
    return _unstable_createEl(as, { ...props, ...classes.vstack });
  },
);

export const VStack = createPolymorphicComponent<t.VStackDef>(_VStack);

VStack.id = Components.VStack;
VStack.defaultProps = {
  gap: '$2',
};

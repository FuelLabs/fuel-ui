import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';

export type FlexProps = t.FlexProps;

const _Flex = _unstable_createComponent<t.FlexDef>(
  Components.Flex,
  ({ as = 'div', css, ...props }) => {
    const classes = useFlexProps(props, css);
    return _unstable_createEl(as, { ...props, ...classes.flex });
  },
);

export const Flex = createPolymorphicComponent<t.FlexDef>(_Flex);

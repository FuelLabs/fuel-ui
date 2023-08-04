import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { useFlexProps } from './useFlexProps';

export type FlexProps = t.FlexProps;

const _Flex = _unstable_createComponent<t.FlexDef>(
  Components.Flex,
  ({ as = 'div', css, ...props }) => {
    const classes = useFlexProps(props, css);
    const elementProps = useElementProps(props, classes.flex);
    return createElement(as, elementProps);
  },
);

export const Flex = createPolymorphicComponent<t.FlexDef>(_Flex);

import { mergeProps } from 'react-aria';
import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';

const _BoxCentered = _unstable_createComponent<t.BoxCenteredDef>(
  Components.BoxCentered,
  ({ as = 'div', css, minHS, minWS, ...props }) => {
    const classes = useFlexProps(props, css);
    const itemProps = mergeProps(props, classes.centered, {
      ...(minHS ? { 'data-min-hs': minHS } : {}),
      ...(minWS ? { 'data-min-ws': minWS } : {}),
    });
    return _unstable_createEl(as, itemProps);
  },
);

export const BoxCentered =
  createPolymorphicComponent<t.BoxCenteredDef>(_BoxCentered);

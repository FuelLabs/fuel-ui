import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import { useDialog, type DialogHeadingDef } from './defs';
import { styles } from './styles';

const _DialogHeading = _unstable_createComponent<DialogHeadingDef>(
  Components.DialogHeading,
  ({ as = 'h2', children, ...props }) => {
    const { headingProps } = useDialog();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const classes = useStyles(styles, props as any, ['heading']);
    const nextProps = {
      ...headingProps,
      ...props,
      ...classes.heading,
    } as DialogHeadingDef['props'];

    return createElement(as, nextProps, children);
  },
);

export const DialogHeading =
  createPolymorphicComponent<DialogHeadingDef>(_DialogHeading);

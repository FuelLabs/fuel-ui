import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import { useDialog, type DialogHeadingDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const DialogHeading = _unstable_createComponent<DialogHeadingDef>(
  Components.DialogHeading,
  ({ as = 'h2', children, ...props }) => {
    const { headingProps } = useDialog();
    const classes = useStyles(styles, props);
    const nextProps = {
      ...headingProps,
      ...props,
      className: classes.heading.className,
    };
    return createElement(as, nextProps, children);
  }
);

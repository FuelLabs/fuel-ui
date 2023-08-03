import { createElement } from 'react';
import { FocusScope, mergeProps } from 'react-aria';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';

import type { DialogContentDef } from './defs';
import { useDialog } from './defs';
import { styles } from './styles';

export const DialogContent = _unstable_createComponent<DialogContentDef>(
  Components.DialogContent,
  ({ as = 'div', children, ...props }) => {
    const dialogProps = useDialog();
    const classes = useStyles(styles, props);

    const nextProps = {
      ...mergeProps(
        props,
        dialogProps.overlayProps!,
        dialogProps.dialogProps!,
        dialogProps.modalProps!,
      ),
      ref: dialogProps.triggerRef,
      className: classes.content.className,
    };

    return createElement(
      as,
      nextProps,
      <FocusScope contain autoFocus>
        {children}
      </FocusScope>,
    );
  },
);

DialogContent.id = 'DialogContent';

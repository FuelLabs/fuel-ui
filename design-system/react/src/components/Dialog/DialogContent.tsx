import { FocusScope, mergeProps } from 'react-aria';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { useDialog } from './Dialog';
import type { DialogContentDef } from './defs';
import { styles } from './styles';

const _DialogContent = _unstable_createComponent<DialogContentDef>(
  Components.DialogContent,
  ({ as = 'div', children, ...props }) => {
    const dialogProps = useDialog();
    const classes = useStyles(styles, props, ['content']);
    const nextProps = {
      ...mergeProps(
        props,
        dialogProps.overlayProps!,
        dialogProps.dialogProps!,
        dialogProps.modalProps!,
        classes.content,
      ),
      ref: dialogProps.triggerRef,
    };

    return _unstable_createEl(
      as,
      nextProps,
      <FocusScope contain autoFocus>
        {children}
      </FocusScope>,
    );
  },
);

export const DialogContent =
  createPolymorphicComponent<DialogContentDef>(_DialogContent);

DialogContent.id = 'DialogContent';

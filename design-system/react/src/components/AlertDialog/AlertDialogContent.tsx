import { cx } from '@fuel-ui/css';
import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type { AlertDialogContentDef } from './defs';
import { styles } from './styles';

export const AlertDialogContent =
  _unstable_createComponent<AlertDialogContentDef>(
    Components.AlertDialogContent,
    ({ children, className, overlayClassName, ...props }) => {
      const classes = useStyles(styles, props);
      const contentChildren = (
        <>
          <RAlertDialog.Overlay
            className={cx(classes.overlay.className, overlayClassName)}
          />
          <RAlertDialog.Content
            {...props}
            className={cx(className, classes.content.className)}
          >
            {children}
          </RAlertDialog.Content>
        </>
      );

      return _unstable_createEl(RAlertDialog.Portal, {}, contentChildren);
    },
  );

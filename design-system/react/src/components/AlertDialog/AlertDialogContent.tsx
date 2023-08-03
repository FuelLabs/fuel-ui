import { cx } from '@fuel-ui/css';
import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';

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

      return createElement(RAlertDialog.Portal, props, contentChildren);
    },
  );

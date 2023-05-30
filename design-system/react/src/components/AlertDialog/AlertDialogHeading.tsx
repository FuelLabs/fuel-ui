import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export type AlertDialogHeadingProps = RAlertDialog.AlertDialogTitleProps;

export const AlertDialogHeading =
  _unstable_createComponent<t.AlertDialogHeadingDef>(
    Components.AlertDialogHeading,
    (props) => {
      const classes = useStyles(styles);
      const elementProps = useElementProps(props, classes.heading);
      return createElement(RAlertDialog.AlertDialogTitle, elementProps);
    }
  );

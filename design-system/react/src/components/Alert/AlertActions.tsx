import { Children, cloneElement } from 'react';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { useAlertProps } from './Alert';
import type * as t from './defs';
import { styles } from './styles';

const BUTTON_COLORS = {
  info: 'blue',
  warning: 'amber',
  success: 'green',
  error: 'red',
};

const _AlertActions = _unstable_createComponent<t.AlertActionsDef>(
  Components.AlertActions,
  ({ as = 'footer', children, ...props }) => {
    const classes = useStyles(styles);
    const { status = 'info' } = useAlertProps();
    const itemProps = { ...props, ...classes.actions };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === 'AlertButton') {
        return cloneElement(child, { color: BUTTON_COLORS[status] });
      }
      return child;
    });

    return _unstable_createEl(as, itemProps, <>{customChildren}</>);
  },
);

export const AlertActions =
  createPolymorphicComponent<t.AlertActionsDef>(_AlertActions);

AlertActions.id = 'AlertActions';

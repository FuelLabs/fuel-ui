/* eslint-disable @typescript-eslint/naming-convention */
import { Children, cloneElement, createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import { useAlertProps } from './Alert';
import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const BUTTON_COLORS = {
  info: 'blue',
  warning: 'amber',
  success: 'green',
  error: 'red',
};

const _AlertActions = createComponent2<t.AlertActionsDef>(
  Components.AlertActions,
  ({ as = 'footer', children, ...props }) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.actions);
    const { status = 'info' } = useAlertProps();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === 'AlertButton') {
        return cloneElement(child, { color: BUTTON_COLORS[status] });
      }
      return child;
    });

    return createElement(as, elementProps, <>{customChildren}</>);
  }
);

export const AlertActions =
  createPolymorphicComponent<t.AlertActionsDef>(_AlertActions);

AlertActions.id = 'AlertActions';

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  cloneElement,
  createContext,
  createElement,
  useContext,
} from 'react';

import { createComponent2 } from '../../utils';
import { Box } from '../Box';
import { Flex } from '../Flex';
import type { Icons } from '../Icon';
import { Icon } from '../Icon';

import { AlertActions } from './AlertActions';
import { AlertButton } from './AlertButton';
import { AlertDescription } from './AlertDescription';
import { AlertTitle } from './AlertTitle';
import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

type ContextProps = {
  status?: t.AlertStatus;
};

const ctx = createContext<ContextProps>({});
export function useAlertProps() {
  return useContext(ctx);
}

const STATUS_ICONS: Record<string, { icon: Icons }> = {
  info: { icon: 'WarningCircle' },
  warning: { icon: 'Warning' },
  success: { icon: 'CheckCircle' },
  error: { icon: 'XCircle' },
};

export const Alert = createComponent2<t.AlertDef>(
  Components.Alert,
  ({ as = 'div', children, ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    const { status = 'info' } = props;

    const items = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === 'AlertActions') {
        return cloneElement(child);
      }
      return child;
    });

    const element = createElement(
      as,
      elementProps,
      <>
        <Box className={classes.icon.className}>
          <Icon {...STATUS_ICONS[status]} />
        </Box>
        <Flex className={classes.content.className}>{items}</Flex>
      </>
    );

    return <ctx.Provider value={{ status }}>{element}</ctx.Provider>;
  }
);

Alert.id = 'Alert';
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Actions = AlertActions;
Alert.Button = AlertButton;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, cloneElement, createContext, useContext } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Box } from '../Box';
import { Flex } from '../Box/Flex';
import type { Icons } from '../Icon';
import { Icon } from '../Icon';

import { AlertActions } from './AlertActions';
import { AlertButton } from './AlertButton';
import { AlertDescription } from './AlertDescription';
import { AlertTitle } from './AlertTitle';
import type { AlertDef, AlertStatus } from './defs';
import { styles } from './styles';

type ContextProps = {
  status?: AlertStatus;
};

const ctx = createContext<ContextProps>({});
export function useAlertProps() {
  return useContext(ctx);
}

const STATUS_ICONS: Record<string, { icon: Icons }> = {
  info: { icon: 'HelpCircle' },
  warning: { icon: 'AlertTriangle' },
  success: { icon: 'CircleCheck' },
  error: { icon: 'X' },
};

const _Alert = _unstable_createComponent<AlertDef>(
  Components.Alert,
  ({ as = 'div', hideIcon, children, ...props }) => {
    const classes = useStyles(styles, props);
    const itemProps = { ...props, ...classes.root };
    const { status = 'info' } = props;
    const items = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === 'AlertActions') {
        return cloneElement(child);
      }
      return child;
    });

    const element = _unstable_createEl(
      as,
      itemProps,
      <>
        {!hideIcon && (
          <Box {...classes.icon}>
            <Icon {...STATUS_ICONS[status]} />
          </Box>
        )}
        <Flex {...classes.content}>{items}</Flex>
      </>,
    );

    return <ctx.Provider value={{ status }}>{element}</ctx.Provider>;
  },
);

export const Alert = createPolymorphicComponent<AlertDef>(_Alert);

Alert.id = 'Alert';
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Actions = AlertActions;
Alert.Button = AlertButton;

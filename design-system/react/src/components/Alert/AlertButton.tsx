import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

import { useAlertProps } from './Alert';

type ObjProps = {
  id: string;
};

export const AlertButton = createComponent<ButtonProps, ObjProps>(
  ({ children, className, ...props }) => {
    const parentProps = useAlertProps();

    const classes = cx('fuel_alert--button', className);
    const customProps = { ...props, className: classes };
    const defaultColor = parentProps?.color ?? null;

    return (
      <Button
        css={{ color: defaultColor ? `$${defaultColor}!important` : undefined }}
        {...customProps}
        variant="link"
      >
        {children}
      </Button>
    );
  }
);

AlertButton.id = 'AlertButton';

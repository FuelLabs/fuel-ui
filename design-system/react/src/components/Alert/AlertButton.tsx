import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

type ObjProps = {
  id: string;
};

export const AlertButton = createComponent<ButtonProps, ObjProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_AlertButton', className);
    const customProps = { ...props, className: classes };
    return (
      <Button {...customProps} variant="link">
        {children}
      </Button>
    );
  }
);

AlertButton.id = 'AlertButton';

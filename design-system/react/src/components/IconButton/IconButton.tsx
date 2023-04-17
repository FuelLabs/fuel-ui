import { cx } from '@fuel-ui/css';
import type { ReactNode } from 'react';

import { createComponent } from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import type { IconProps } from '../Icon';
import { Tooltip } from '../Tooltip';

type OmitProps = 'leftIcon' | 'rightIcon' | 'justIcon';
export type IconButtonProps = Omit<ButtonProps, OmitProps> & {
  'aria-label': string;
  size?: ButtonProps['size'];
  icon: IconProps['icon'];
  tooltip?: ReactNode;
};

export const IconButton = createComponent<IconButtonProps, unknown, OmitProps>(
  ({ icon, tooltip, className, ...props }) => {
    const classes = cx('fuel_IconButton', className);
    const content = (
      <Button {...props} justIcon className={classes} leftIcon={icon} />
    );
    return tooltip ? <Tooltip content={tooltip}>{content}</Tooltip> : content;
  }
);

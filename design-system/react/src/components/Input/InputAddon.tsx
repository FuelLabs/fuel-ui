import { cx } from '@fuel-ui/css';

import { createComponent, createStyledElement } from '../../utils';

import { useInputProps } from './Input';
import * as styles from './styles';

const InputAddon = createComponent(({ className, children, ...props }) => {
  const { size } = useInputProps();
  const classes = cx('fuel_input--addon', className);
  const customProps = { ...props, className: classes };
  return createStyledElement(
    'div',
    styles.addon,
    { size },
    customProps,
    children
  );
});

type OmitProps = 'left' | 'right';
type ObjProps = {
  id?: string;
};

export const InputAddonLeft = createComponent<unknown, ObjProps, OmitProps>(
  ({ className, ...props }) => (
    <InputAddon
      {...props}
      className={cx('fuel_input-addon--left', className)}
    />
  )
);

export const InputAddonRight = createComponent<unknown, ObjProps, OmitProps>(
  ({ className, ...props }) => (
    <InputAddon
      {...props}
      className={cx('fuel_input-addon--right', className)}
    />
  )
);

InputAddonLeft.id = 'InputAddon';
InputAddonRight.id = 'InputAddon';

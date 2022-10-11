import { cx, styled } from '@fuel-ui/css';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import { useInputProps } from './Input';
import * as styles from './styles';

const Root = styled('div');

const InputAddon = createComponent(({ className, children, ...props }) => {
  const { size } = useInputProps();
  const classes = cx('fuel_input--addon', className, styles.addon({ size }));
  const customProps = { ...props, className: classes };
  return createElement(Root, customProps, children);
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

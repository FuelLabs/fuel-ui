import { cx } from '@fuel-ui/css';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { createComponent, useCreateStyledElement } from '../../utils';

import * as styles from './styles';

export type SwitchProps = SwitchPrimitive.SwitchProps & {
  size?: 'sm' | 'md';
};

export const Switch = createComponent<SwitchProps>(
  ({ size = 'md', className, ...props }) => {
    const classes = cx('fuel_Switch', className);
    return useCreateStyledElement(
      SwitchPrimitive.Root,
      styles.root,
      { size },
      { ...props, className: classes },
      <SwitchPrimitive.SwitchThumb className={styles.thumb({ size })} />,
    );
  },
);

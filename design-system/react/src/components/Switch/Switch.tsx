import { cx } from '@fuel-ui/css';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { mergeProps, useFocusRing } from 'react-aria';

import { createComponent, useCreateStyledElement } from '../../utils';

import * as styles from './styles';

export type SwitchProps = SwitchPrimitive.SwitchProps & {
  size?: 'sm' | 'md';
};

export const Switch = createComponent<SwitchProps>(
  ({ size = 'md', className, ...props }) => {
    const { isFocusVisible, focusProps } = useFocusRing({ isTextInput: false });
    const classes = cx('fuel_Switch', className, {
      focused: isFocusVisible,
    });

    return useCreateStyledElement(
      SwitchPrimitive.Root,
      styles.root,
      { size },
      mergeProps(props, focusProps, { className: classes }),
      <SwitchPrimitive.SwitchThumb className={styles.thumb({ size })} />,
    );
  },
);

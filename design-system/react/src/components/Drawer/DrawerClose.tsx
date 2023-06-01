import { cx } from '@fuel-ui/css';

import type { IconButtonProps } from '..';
import { Icon, IconButton } from '..';

import { useDrawer } from '.';
import * as styles from './styles';

import { createComponent } from '~/utils';

type OmitProps = 'children';
type ElementType = 'button';
type DrawerCloseProps = Omit<IconButtonProps, 'aria-label' | 'icon'> & {
  icon?: IconButtonProps['icon'];
  ['aria-label']?: IconButtonProps['aria-label'];
};

export const DrawerClose = createComponent<
  DrawerCloseProps,
  unknown,
  OmitProps,
  ElementType
>(({ css, className, ...props }) => {
  const classes = cx('fuel_DrawerClose', className);
  const { state } = useDrawer();

  function handleClose() {
    state?.setOpen(false);
  }

  return (
    <IconButton
      {...props}
      css={{ ...styles.close, ...css }}
      icon={props.icon || Icon.is('X')}
      iconSize={20}
      aria-label={props['aria-label'] || 'Close'}
      variant={props.variant || 'link'}
      color={props.color || 'gray'}
      className={classes}
      onPress={handleClose}
    />
  );
});

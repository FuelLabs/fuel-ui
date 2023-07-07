import { Icon, IconButton } from '..';

import { useDrawer } from './Drawer';
import type { DrawerCloseDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const DrawerClose = _unstable_createComponent<DrawerCloseDef>(
  Components.DrawerClose,
  ({ css, ...props }) => {
    const classes = useStyles(styles, props, ['close']);
    const { state } = useDrawer();

    function handleClose() {
      state?.setOpen(false);
    }

    return (
      <IconButton
        {...props}
        css={css}
        icon={props.icon || Icon.is('X')}
        iconSize={20}
        aria-label={props['aria-label'] || 'Close'}
        variant={props.variant || 'link'}
        color={props.color || 'gray'}
        className={classes.close.className}
        onPress={handleClose}
      />
    );
  }
);

import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Link } from '../Link';

import type { NavMenuItemDef } from './defs';
import { styles } from './styles';

const _NavMenuItem = _unstable_createComponent<NavMenuItemDef>(
  Components.NavMenuItem,
  ({ isActive, ...props }) => {
    const classes = useStyles(styles, props, ['menuItem']);
    return (
      <Link
        {...props}
        {...classes.menuItem}
        css={{ ...props.css, color: isActive ? '$brand' : '$textColor' }}
        data-active={isActive}
      />
    );
  },
);

export const NavMenuItem =
  createPolymorphicComponent<NavMenuItemDef>(_NavMenuItem);

NavMenuItem.id = 'NavMenuItem';

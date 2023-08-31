import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Box } from '../Box';

import type { NavMenuDef } from './defs';
import { styles } from './styles';

const _NavMenu = _unstable_createComponent<NavMenuDef>(
  Components.NavMenu,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props, ['menu']);
    return <Box.Stack as={as} direction="row" {...props} {...classes.menu} />;
  },
);

export const NavMenu = createPolymorphicComponent<NavMenuDef>(_NavMenu);
NavMenu.defaultProps = {
  gap: '$4',
};

NavMenu.id = 'NavMenu';

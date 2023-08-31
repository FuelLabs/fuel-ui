import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { FuelLogo } from '../FuelLogo';

import type { NavLogoDef } from './defs';
import { styles } from './styles';

export const NavLogo = _unstable_createComponent<NavLogoDef>(
  Components.NavLogo,
  ({ size = 32, ...props }) => {
    const classes = useStyles(styles, props, ['logo']);
    return <FuelLogo {...props} {...classes.logo} size={size} />;
  },
);

NavLogo.id = 'NavLogo';

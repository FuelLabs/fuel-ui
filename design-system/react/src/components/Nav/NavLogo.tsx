import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { FuelLogo } from '../FuelLogo';

import type { NavLogoDef } from './defs';
import { styles } from './styles';

const _NavLogo = _unstable_createComponent<NavLogoDef>(
  Components.NavLogo,
  ({ size = 32, ...props }) => {
    const classes = useStyles(styles, props, ['logo']);
    return <FuelLogo {...props} {...classes.logo} size={size} />;
  },
);

export const NavLogo = createPolymorphicComponent<NavLogoDef>(_NavLogo);
NavLogo.id = 'NavLogo';

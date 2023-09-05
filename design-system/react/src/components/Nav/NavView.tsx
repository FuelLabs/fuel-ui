import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { NavViewDef } from './defs';
import { styles } from './styles';

const _NavView = _unstable_createComponent<NavViewDef>(
  Components.NavView,
  ({ as: Root = 'nav', ...props }) => {
    const classes = useStyles(styles, props, ['view']);
    return <Root {...props} {...classes.view} />;
  },
);

export const NavView = createPolymorphicComponent<NavViewDef>(_NavView);
NavView.id = 'NavView';

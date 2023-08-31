import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { NavSpacerDef } from './defs';
import { styles } from './styles';

const _NavSpacer = _unstable_createComponent<NavSpacerDef>(
  Components.NavSpacer,
  (props) => {
    const classes = useStyles(styles, props, ['spacer']);
    return <hr {...props} {...classes.spacer} />;
  },
);

export const NavSpacer = createPolymorphicComponent<NavSpacerDef>(_NavSpacer);

NavSpacer.id = 'NavSpacer';

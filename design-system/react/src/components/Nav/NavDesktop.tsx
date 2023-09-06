import { useStyles } from '~/hooks';
import { useStrictedChildren } from '~/hooks/useStrictedChildren';
import { useWindowSize } from '~/hooks/useWindowSize';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Box } from '../Box';

import type { NavDesktopDef } from './defs';
import { styles } from './styles';

const CHILD_ITEMS = [
  'NavLogo',
  'NavMenu',
  'NavSpacer',
  'NavConnection',
  'NavThemeToggle',
];

const _NavDesktop = _unstable_createComponent<NavDesktopDef>(
  Components.NavDesktop,
  ({ as: Root = 'nav', ...props }) => {
    const { width } = useWindowSize();
    const classes = useStyles(styles, props, ['desktop', 'wrapper']);
    const children = useStrictedChildren(
      'NavDesktop',
      CHILD_ITEMS,
      props.children,
    );

    if (width < 1024) return null;

    return (
      <Box as="section" {...classes.wrapper}>
        <Root {...props} {...classes.desktop}>
          {children}
        </Root>
      </Box>
    );
  },
);

export const NavDesktop =
  createPolymorphicComponent<NavDesktopDef>(_NavDesktop);

NavDesktop.id = 'NavDesktop';

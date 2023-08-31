import { cx } from '@fuel-ui/css';
import { useStyles } from '~/hooks/useStore';
import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavMenuItem } from './NavMenuItem';
import { NavSpacer } from './NavSpacer';
import { NavThemeToggle } from './NavThemeToggle';
import type { NavDef } from './defs';
import { styles } from './styles';

const _Nav = _unstable_createComponent<NavDef>(
  Components.Nav,
  ({ as: Root = 'nav', children, css, gap = '$10', ...props }) => {
    const { stack } = useFlexProps(props, {
      ...css,
      gap,
      flexDirection: 'row',
    });

    const classes = useStyles(styles, props, ['root']);
    return (
      <Root {...props} className={cx(stack.className, classes.root.className)}>
        {children}
      </Root>
    );
  },
);

export const Nav = createPolymorphicComponent<NavDef>(_Nav);

Nav.defaultProps = {
  size: 'md',
};

Nav.Logo = NavLogo;
Nav.Menu = NavMenu;
Nav.MenuItem = NavMenuItem;
Nav.Spacer = NavSpacer;
Nav.ThemeToggle = NavThemeToggle;

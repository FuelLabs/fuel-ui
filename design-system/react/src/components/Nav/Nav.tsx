import { cx } from '@fuel-ui/css';
import { createContext, useContext } from 'react';
import { useStyles } from '~/hooks/useStore';
import { Components } from '~/utils/components-list';

import { useFlexProps } from '../../hooks/useFlexProps';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { NavConnection } from './NavConnection';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavMenuItem } from './NavMenuItem';
import { NavSpacer } from './NavSpacer';
import { NavThemeToggle } from './NavThemeToggle';
import type { NavDef, NavProps } from './defs';
import { styles } from './styles';

type ContextProps = NavProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = createContext<ContextProps>({} as any);
export function useNavProps() {
  return useContext(ctx);
}

const _Nav = _unstable_createComponent<NavDef>(
  Components.Nav,
  ({
    as: Root = 'nav',
    children,
    css,
    gap = '$10',
    size,
    network,
    account,
    ...props
  }) => {
    const { stack } = useFlexProps(props, {
      ...css,
      gap,
      flexDirection: 'row',
    });

    const classes = useStyles(styles, props, ['root']);
    return (
      <ctx.Provider value={{ size, network, account }}>
        <Root
          {...props}
          className={cx(stack.className, classes.root.className)}
        >
          {children}
        </Root>
      </ctx.Provider>
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
Nav.Connection = NavConnection;

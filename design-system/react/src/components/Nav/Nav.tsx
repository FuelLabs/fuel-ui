import { createContext, useContext } from 'react';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import { NavConnection } from './NavConnection';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavMenuItem } from './NavMenuItem';
import { NavSpacer } from './NavSpacer';
import { NavThemeToggle } from './NavThemeToggle';
import { NavView } from './NavView';
import type { NavDef, NavProps } from './defs';

type ContextProps = NavProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = createContext<ContextProps>({} as any);
export function useNavProps() {
  return useContext(ctx);
}

export const Nav = _unstable_createComponent<NavDef>(
  Components.Nav,
  ({ network, account, onConnect, children }) => {
    return (
      <ctx.Provider value={{ size, network, account, onConnect }}>
        {children}
      </ctx.Provider>
    );
  },
);

Nav.defaultProps = {
  size: 'md',
};

Nav.Logo = NavLogo;
Nav.Menu = NavMenu;
Nav.MenuItem = NavMenuItem;
Nav.Spacer = NavSpacer;
Nav.ThemeToggle = NavThemeToggle;
Nav.Connection = NavConnection;
Nav.View = NavView;

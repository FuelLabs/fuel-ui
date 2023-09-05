import { createContext, useContext } from 'react';
import { useStrictedChildren } from '~/hooks/useStrictedChildren';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import { NavConnection } from './NavConnection';
import { NavDesktop } from './NavDesktop';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavMenuItem } from './NavMenuItem';
import { NavMobile } from './NavMobile';
import { NavMobileContent } from './NavMobileContent';
import { NavSpacer } from './NavSpacer';
import { NavThemeToggle } from './NavThemeToggle';
import type { NavDef, NavProps } from './defs';

type ContextProps = NavProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = createContext<ContextProps>({} as any);
export function useNavProps() {
  return useContext(ctx);
}

const CHILD_ITEMS = ['NavDesktop', 'NavMobile'];

export const Nav = _unstable_createComponent<NavDef>(
  Components.Nav,
  ({ network, account, onConnect, children }) => {
    const newChildren = useStrictedChildren('Nav', CHILD_ITEMS, children);
    return (
      <ctx.Provider value={{ network, account, onConnect }}>
        {newChildren}
      </ctx.Provider>
    );
  },
);

Nav.Connection = NavConnection;
Nav.Logo = NavLogo;
Nav.Menu = NavMenu;
Nav.MenuItem = NavMenuItem;
Nav.MobileContent = NavMobileContent;
Nav.Spacer = NavSpacer;
Nav.ThemeToggle = NavThemeToggle;
Nav.Desktop = NavDesktop;
Nav.Mobile = NavMobile;

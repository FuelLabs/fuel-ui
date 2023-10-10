import type { ComponentProps } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { Box } from '../Box';
import type { FuelLogoProps } from '../FuelLogo';
import type { Link } from '../Link';

import type { NavConnection } from './NavConnection';
import type { NavDesktop } from './NavDesktop';
import type { NavLogo } from './NavLogo';
import type { NavMenu } from './NavMenu';
import type { NavMenuItem } from './NavMenuItem';
import type { NavMobile } from './NavMobile';
import type { NavMobileContent } from './NavMobileContent';
import type { NavSpacer } from './NavSpacer';
import type { NavThemeToggle } from './NavThemeToggle';

export type NetworkObj = {
  id?: string;
  name: string;
  url: string;
};

export type NavProps = {
  network?: NetworkObj;
  account?: string;
  onConnect?: () => void;
};

export type NavDef = CreateComponent<{
  type: 'nav';
  component: Components.Nav;
  omit: 'as' | 'css';
  props: NavProps;
  element: HTMLElement;
  styles:
    | 'logo'
    | 'menu'
    | 'menuItem'
    | 'spacer'
    | 'connection'
    | 'network'
    | 'themeToggle'
    | 'avatar'
    | 'desktop'
    | 'mobile'
    | 'wrapper'
    | 'mobileContent';
  namespace: {
    Connection: typeof NavConnection;
    Desktop: typeof NavDesktop;
    Logo: typeof NavLogo;
    Menu: typeof NavMenu;
    MenuItem: typeof NavMenuItem;
    Mobile: typeof NavMobile;
    MobileContent: typeof NavMobileContent;
    Spacer: typeof NavSpacer;
    ThemeToggle: typeof NavThemeToggle;
  };
}>;

export type NavLogoProps = ComponentProps<typeof Box> & FuelLogoProps;
export type NavLogoDef = CreateComponent<{
  type: 'div';
  omit: 'as' | 'children';
  component: Components.NavLogo;
  props: NavLogoProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavMenuProps = Omit<ComponentProps<typeof Box>, 'direction'>;
export type NavMenuDef = CreateComponent<{
  type: 'div';
  component: Components.NavMenu;
  props: NavMenuProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavMenuItemProps = ComponentProps<typeof Link> & {
  isActive?: boolean;
};
export type NavMenuItemDef = CreateComponent<{
  type: 'a';
  component: Components.NavMenuItem;
  props: NavMenuItemProps;
  element: HTMLAnchorElement;
  namespace: {
    id: string;
  };
}>;

export type NavSpacerDef = CreateComponent<{
  type: 'hr';
  omit: 'children' | 'as' | 'css';
  component: Components.NavSpacer;
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {};
  element: HTMLHRElement;
  namespace: {
    id: string;
  };
}>;

export type NavThemeToggleProps = ComponentProps<typeof Box> & {
  whenOpened?: 'hide' | 'show' | 'no-effect';
};
export type NavThemeToggleDef = CreateComponent<{
  type: 'div';
  omit: 'as' | 'children';
  component: Components.NavThemeToggle;
  props: NavThemeToggleProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavConnectionProps = {
  whenOpened?: 'hide' | 'show' | 'no-effect';
};
export type NavConnectionDef = CreateComponent<{
  type: 'div';
  omit: 'children' | 'as';
  component: Components.NavConnection;
  props: NavConnectionProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavMobileContentProps = ComponentProps<typeof Box>;
export type NavMobileContentDef = CreateComponent<{
  type: 'div';
  component: Components.NavMobileContent;
  props: NavMobileContentProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavDesktopProps = ComponentProps<typeof Box>;
export type NavDesktopDef = CreateComponent<{
  type: 'nav';
  component: Components.NavDesktop;
  props: NavDesktopProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavMobileProps = ComponentProps<typeof Box> & {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};
export type NavMobileDef = CreateComponent<{
  type: 'nav';
  component: Components.NavMobile;
  props: NavMobileProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

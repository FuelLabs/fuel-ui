import type { ComponentProps } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { Box } from '../Box';
import type { FuelLogo } from '../FuelLogo';
import type { Link } from '../Link';

import type { NavLogo } from './NavLogo';
import type { NavMenu } from './NavMenu';
import type { NavMenuItem } from './NavMenuItem';
import type { NavSpacer } from './NavSpacer';
import type { NavThemeToggle } from './NavThemeToggle';

export type NetworkObj = {
  id?: string;
  name: string;
  url: string;
  isSelected?: boolean;
};

export type ConnectionObj = {
  network: NetworkObj;
  account: string;
};

export type NavSize = 'sm' | 'md' | 'lg' | 'xl';
export type NavProps = Omit<ComponentProps<typeof Box.Stack>, 'direction'> & {
  connection?: ConnectionObj;
  size?: NavSize;
};

export type NavDef = CreateComponent<{
  type: 'nav';
  component: Components.Nav;
  props: NavProps;
  element: HTMLDivElement;
  styles:
    | 'root'
    | 'logo'
    | 'menu'
    | 'menuItem'
    | 'spacer'
    | 'connection'
    | 'network'
    | 'themeToggle'
    | 'avatar';
  namespace: {
    Logo: typeof NavLogo;
    Menu: typeof NavMenu;
    MenuItem: typeof NavMenuItem;
    Spacer: typeof NavSpacer;
    ThemeToggle: typeof NavThemeToggle;
  };
}>;

export type NavLogoProps = ComponentProps<typeof FuelLogo>;
export type NavLogoDef = CreateComponent<{
  type: 'svg';
  omit: 'as' | 'children';
  component: Components.NavLogo;
  props: NavLogoProps;
  element: SVGSVGElement;
  namespace: {
    id: string;
  };
}>;

export type NavMenuProps = ComponentProps<typeof Box.Stack>;
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

export type NavThemeToggle = Omit<ComponentProps<typeof Box.Flex>, 'onClick'>;
export type NavThemeToggleDef = CreateComponent<{
  type: 'div';
  omit: 'children';
  component: Components.NavThemeToggle;
  props: NavThemeToggle;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

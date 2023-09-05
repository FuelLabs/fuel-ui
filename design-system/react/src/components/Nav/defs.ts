import type { ComponentProps } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { Box } from '../Box';
import type { FuelLogo } from '../FuelLogo';
import type { Link } from '../Link';

import type { NavConnection } from './NavConnection';
import type { NavLogo } from './NavLogo';
import type { NavMenu } from './NavMenu';
import type { NavMenuItem } from './NavMenuItem';
import type { NavSpacer } from './NavSpacer';
import type { NavThemeToggle } from './NavThemeToggle';
import type { NavView } from './NavView';

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
    | 'view';
  namespace: {
    Logo: typeof NavLogo;
    Menu: typeof NavMenu;
    MenuItem: typeof NavMenuItem;
    Spacer: typeof NavSpacer;
    ThemeToggle: typeof NavThemeToggle;
    Connection: typeof NavConnection;
    View: typeof NavView;
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

export type NavThemeToggleDef = CreateComponent<{
  type: 'div';
  omit: 'as' | 'children';
  component: Components.NavThemeToggle;
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {};
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavConnectionProps = ComponentProps<typeof Box.Stack>;
export type NavConnectionDef = CreateComponent<{
  type: 'div';
  omit: 'children';
  component: Components.NavConnection;
  props: NavConnectionProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

export type NavViewProps = Omit<
  ComponentProps<typeof Box.Stack>,
  'direction'
> & {
  type: 'desktop' | 'mobile';
};
export type NavViewDef = CreateComponent<{
  type: 'nav';
  component: Components.NavView;
  props: NavViewProps;
  element: HTMLDivElement;
  namespace: {
    id: string;
  };
}>;

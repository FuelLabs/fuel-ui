import type { PopoverProps } from '@radix-ui/react-popover';
import type { AriaButtonProps, AriaMenuOptions } from 'react-aria';
import type {
  MenuTriggerState,
  MenuTriggerProps,
  ItemProps,
} from 'react-stately';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

import type { ButtonProps } from '../Button';
import type { MenuItemProps, MenuProps } from '../Menu';

import type { DropdownMenu } from './DropdownMenu';
import type { DropdownMenuItem } from './DropdownMenuItem';
import type { DropdownTrigger } from './DropdownTrigger';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

export type DropdownContext = {
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  state: MenuTriggerState;
  menuTriggerProps: AriaButtonProps<'button'>;
  menuProps: AriaMenuOptions<unknown>;
};

// ----------------------------------------------------------------------------
// Drawer Component
// ----------------------------------------------------------------------------

export type DropdownProps = Omit<MenuTriggerProps, 'direction'> & {
  popoverProps?: Partial<PopoverProps>;
};

export type DropdownNS = {
  Trigger: typeof DropdownTrigger;
  Menu: typeof DropdownMenu;
  MenuItem: typeof DropdownMenuItem;
};

export type DropdownDef = CreateComponent<{
  type: 'div';
  component: Components.Dropdown;
  props: DropdownProps;
  element: HTMLDivElement;
  namespace: DropdownNS;
  styles: 'root' | 'trigger' | 'menu' | 'menuItem';
}>;

// ----------------------------------------------------------------------------
// DrawerTrigger Component
// ----------------------------------------------------------------------------
export type DropdownTriggerProps = ButtonProps & {
  asChild?: boolean;
};

export type DropdownTriggerNS = {
  id: string;
};

export type DropdownTriggerDef = CreateComponent<{
  type: 'button';
  component: Components.DropdownTrigger;
  props: DropdownTriggerProps;
  element: HTMLButtonElement;
  namespace: DropdownTriggerNS;
}>;

// ----------------------------------------------------------------------------
// DrawerMenu Component
// ----------------------------------------------------------------------------
export type DropdownMenuProps = MenuProps;

export type DropdownMenuNS = {
  id: string;
};

export type DropdownMenuDef = CreateComponent<{
  type: 'div';
  component: Components.DropdownMenu;
  props: DropdownMenuProps;
  element: HTMLDivElement;
  namespace: DropdownMenuNS;
}>;

// ----------------------------------------------------------------------------
// DrawerMenuItem Component
// ----------------------------------------------------------------------------
export type DropdownMenuItemProps = ItemProps<MenuItemProps>;
export type DropdownMenuItemDef = CreateComponent<{
  type: 'div';
  component: Components.DropdownMenuItem;
  props: DropdownMenuItemProps;
  element: HTMLDivElement;
}>;

import type { ItemProps } from 'react-stately';

import { Menu } from '../Menu';
import type { MenuItemProps } from '../Menu/MenuItem';

export type DropdownMenuItemProps = ItemProps<MenuItemProps>;
export const DropdownMenuItem: typeof Menu.Item = Menu.Item;

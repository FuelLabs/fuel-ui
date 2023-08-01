import { createComponent } from '~/utils';

import type { MenuProps } from '../Menu';
import { Menu } from '../Menu';

import { useDropdown } from './Dropdown';

export type DropdownMenuProps = MenuProps;
type ObjProps = {
  id: string;
};

export const DropdownMenu = createComponent<DropdownMenuProps, ObjProps>(
  (props) => {
    const { menuProps } = useDropdown();
    return (
      <Menu
        {...props}
        {...(menuProps as MenuProps)}
        data-overlay
        css={{
          boxSizing: 'border-box',
          ...props.css,
        }}
      />
    );
  },
);

DropdownMenu.id = 'DropdownMenu';

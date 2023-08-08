import { useStyles } from '~/hooks';
import { _unstable_createComponent, _unstable_createEl } from '~/utils';
import { Components } from '~/utils/components-list';

import type { MenuProps } from '../Menu';
import { Menu } from '../Menu';

import { useDropdown } from './Dropdown';
import type { DropdownMenuDef } from './defs';
import { styles } from './styles';

export const DropdownMenu = _unstable_createComponent<DropdownMenuDef>(
  Components.DropdownMenu,
  (props) => {
    const { menuProps } = useDropdown();
    const classes = useStyles(
      styles,
      {
        ...props,
        css: {
          boxSizing: 'border-box',
          ...props.css,
        },
      },
      ['menu'],
    );

    return _unstable_createEl(Menu, {
      ...props,
      ...classes.menu,
      ...(menuProps as MenuProps),
    });
  },
);

DropdownMenu.id = 'DropdownMenu';

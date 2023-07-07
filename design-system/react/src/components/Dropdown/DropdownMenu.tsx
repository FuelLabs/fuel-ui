import { createElement } from 'react';

import type { MenuProps } from '../Menu';
import { Menu } from '../Menu';

import { useDropdown } from './Dropdown';
import type { DropdownMenuDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

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
      ['menu']
    );

    const elementProps = useElementProps(props, classes.menu);

    return createElement(Menu, {
      ...elementProps,
      ...(menuProps as MenuProps),
    });
  }
);

DropdownMenu.id = 'DropdownMenu';

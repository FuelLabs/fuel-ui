/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, createContext, useContext, useRef } from 'react';
import { useMenuTrigger } from 'react-aria';
import { useMenuTriggerState } from 'react-stately';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { useKeyPressEvent } from '../../hooks/useKeyPressEvent';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Popover } from '../Popover';

import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownTrigger } from './DropdownTrigger';
import type { DropdownContext, DropdownDef } from './defs';
import { styles } from './styles';

export const DropdownCtx = createContext<DropdownContext>(
  {} as DropdownContext,
);

export function useDropdown() {
  return useContext(DropdownCtx);
}

const _Dropdown = _unstable_createComponent<DropdownDef>(
  Components.Dropdown,
  ({ as = 'div', children, css, popoverProps, ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const state = useMenuTriggerState({
      ...props,
      trigger: 'press',
    });

    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
    const classes = useStyles(styles, props);

    const ctxProps = {
      state,
      menuTriggerProps,
      menuProps,
      triggerRef: ref,
    };

    const trigger = Children.toArray(children).find(
      (child: any) => child?.type.id === 'DropdownTrigger',
    );

    const menu = Children.toArray(children).find(
      (child: any) => child?.type.id === 'DropdownMenu',
    );

    const customChildren = (
      <DropdownCtx.Provider value={ctxProps}>
        <Popover
          {...popoverProps}
          css={{ padding: '$0', borderColor: 'transparent', ...css }}
          content={menu}
          open={state.isOpen}
          onOpenChange={state.setOpen}
          showCloseButton={false}
        >
          {trigger}
        </Popover>
      </DropdownCtx.Provider>
    );

    useKeyPressEvent('Esc', () => {
      if (state.isOpen) {
        state.setOpen(false);
      }
    });

    return _unstable_createEl(as, classes.root, customChildren);
  },
);

export const Dropdown = createPolymorphicComponent<DropdownDef>(_Dropdown);

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

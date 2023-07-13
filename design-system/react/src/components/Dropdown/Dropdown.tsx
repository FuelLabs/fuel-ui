/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import { Children, createContext, useContext, useRef } from 'react';
import type { AriaButtonProps, AriaMenuOptions } from 'react-aria';
import { useMenuTrigger } from 'react-aria';
import type { MenuTriggerProps, MenuTriggerState } from 'react-stately';
import { useMenuTriggerState } from 'react-stately';

import { useKeyPressEvent } from '../../hooks/useKeyPressEvent';
import { createComponent, useCreateStyledElement } from '../../utils';
import type { PopoverProps } from '../Popover';
import { Popover } from '../Popover';

import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownTrigger } from './DropdownTrigger';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

export type DropdownContext = {
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  state: MenuTriggerState;
  menuTriggerProps: AriaButtonProps<'button'>;
  menuProps: AriaMenuOptions<unknown>;
};

const ctx = createContext<DropdownContext>({} as DropdownContext);

export function useDropdown() {
  return useContext(ctx);
}

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

type ObjProps = {
  Trigger: typeof DropdownTrigger;
  Menu: typeof DropdownMenu;
  MenuItem: typeof DropdownMenuItem;
};

export type DropdownProps = Omit<MenuTriggerProps, 'direction'> & {
  popoverProps?: Partial<PopoverProps>;
};

export const Dropdown = createComponent<DropdownProps, ObjProps>(
  ({ children, className, css, popoverProps, ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const state = useMenuTriggerState(props);
    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
    const classes = cx('fuel_Dropdown', className);

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
      <ctx.Provider value={ctxProps}>
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
      </ctx.Provider>
    );

    useKeyPressEvent('Esc', () => {
      if (state.isOpen) {
        state.setOpen(false);
      }
    });

    return useCreateStyledElement(
      'div',
      null,
      null,
      { className: classes },
      customChildren,
    );
  },
);

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx, styled } from "@fuel-ui/css";
import {
  Children,
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { AriaButtonProps, AriaMenuOptions } from "react-aria";
import { useMenuTrigger } from "react-aria";
import type { MenuTriggerProps, MenuTriggerState } from "react-stately";
import { useMenuTriggerState } from "react-stately";
import { useKeyPressEvent } from "react-use";

import { createComponent } from "../../utils";
import type { PopoverProps } from "../Popover";
import { Popover } from "../Popover";

import { DropdownMenu } from "./DropdownMenu";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { DropdownTrigger } from "./DropdownTrigger";

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

export type DropdownContext = {
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  state: MenuTriggerState;
  menuTriggerProps: AriaButtonProps<"button">;
  menuProps: AriaMenuOptions<unknown>;
  menuMinWidth?: number | null;
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

export type DropdownProps = Omit<MenuTriggerProps, "direction"> & {
  side?: PopoverProps["side"];
  sideOffset?: PopoverProps["sideOffset"];
  align?: PopoverProps["align"];
  alignOffset?: PopoverProps["sideOffset"];
};

const Root = styled("div");

export const Dropdown = createComponent<DropdownProps, ObjProps>(
  ({
    children,
    className,
    side,
    sideOffset,
    align,
    alignOffset,
    css,
    ...props
  }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const state = useMenuTriggerState({ ...props, direction: side });
    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
    const classes = cx("fuel_dropdown", className);
    const [menuMinWidth, setMenuMinWidth] = useState<number | null>(null);

    const ctxProps = {
      state,
      menuTriggerProps,
      menuProps,
      menuMinWidth,
      triggerRef: ref,
    };

    const trigger = Children.toArray(children).find(
      (child: any) => child?.type.id === "DropdownTrigger"
    );

    const menu = Children.toArray(children).find(
      (child: any) => child?.type.id === "DropdownMenu"
    );

    const customChildren = (
      <ctx.Provider value={ctxProps}>
        <Popover
          {...{ side, sideOffset, align, alignOffset }}
          css={{ padding: "$0", ...css }}
          content={menu}
          open={state.isOpen}
          onOpenChange={state.setOpen}
          showCloseButton={false}
        >
          {trigger}
        </Popover>
      </ctx.Provider>
    );

    useEffect(() => {
      if (ref?.current) {
        setMenuMinWidth(ref.current.offsetWidth);
      }
    }, []);

    useKeyPressEvent("Esc", () => {
      if (state.isOpen) {
        state.setOpen(false);
      }
    });

    return createElement(Root, { className: classes }, customChildren);
  }
);

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

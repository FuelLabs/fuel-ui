/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx, styled } from "@fuel-ui/css";
import type { KeyboardEvent, ReactNode } from "react";
import { createElement, Children, cloneElement } from "react";
import { FocusScope, useFocusManager } from "react-aria";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

import type { FocusScopeProps } from "./FocusScope";

type GroupChildrenProps = HTMLProps["div"] & {
  asChild?: boolean;
  children: ReactNode;
};

const Root = styled("div");

const GroupChildren = createComponent<GroupChildrenProps>(
  ({ children, asChild, ...props }) => {
    const { onKeyDown } = useFocusNavigator(props.onKeyDown);
    const classes = cx("fuel_focus-arrow-navigator", props.className);
    const customProps = { ...props, className: classes, onKeyDown };

    if (!asChild) {
      return createElement(Root, customProps, children);
    }

    if (isRightChildrenType(children)) {
      const child = Children.only(children);
      return cloneElement(child as any, { onKeyDown, className: classes });
    }

    throw new Error("Children type not accepted");
  }
);

export type FocusArrowNavigatorProps = FocusScopeProps &
  HTMLProps["div"] & {
    asChild?: boolean;
    children: ReactNode;
  };

export const FocusArrowNavigator = createComponent<FocusArrowNavigatorProps>(
  ({ contain, restoreFocus, autoFocus, children, ...props }) => (
    <FocusScope {...{ contain, restoreFocus, autoFocus }}>
      <GroupChildren {...props}>{children}</GroupChildren>
    </FocusScope>
  )
);

export function useFocusNavigator(keydown: HTMLProps["div"]["onKeyDown"]) {
  const focusManager = useFocusManager();

  const onKeyDown = (e: KeyboardEvent) => {
    keydown?.(e as any);
    // eslint-disable-next-line default-case
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusNext();
        break;
      case "ArrowDown":
        focusManager.focusNext();
        break;
      case "ArrowLeft":
        focusManager.focusPrevious();
        break;
      case "ArrowUp":
        focusManager.focusPrevious();
        break;
    }
  };

  return {
    onKeyDown,
  };
}

function isRightChildrenType(children: ReactNode) {
  return (
    typeof children !== "boolean" &&
    typeof children !== "string" &&
    typeof children !== "undefined" &&
    typeof children !== "number"
  );
}

import { cx, styled } from "@fuel-ui/css";
import type { ReactNode, KeyboardEvent } from "react";
import { createElement, Children, cloneElement } from "react";
import { mergeProps, FocusScope, useFocusManager } from "react-aria";

import { createComponent } from "../../utils";
import { pick } from "../../utils/helpers";
import type { ButtonBaseProps, ButtonProps } from "../Button/Button";

import * as styles from "./styles";

type GroupChildrenProps = {
  childrenProps: ButtonBaseProps;
  children: ReactNode;
};

const Root = styled("div");

function GroupChildren({ children, childrenProps }: GroupChildrenProps) {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
    // eslint-disable-next-line default-case
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusNext();
        break;
      case "ArrowLeft":
        focusManager.focusPrevious();
        break;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customChildren = Children.toArray(children).map((child: any) =>
    cloneElement(child, mergeProps(child.props, childrenProps))
  );

  const classes = cx("fuel_button-group", styles.root());
  return createElement(Root, { className: classes, onKeyDown }, customChildren);
}

const BUTTON_BASE_PROPS = ["size", "color", "variant", "isDisabled"];

export type ButtonGroupProps = Omit<ButtonProps, "className">;

export const ButtonGroup = createComponent<ButtonGroupProps>(
  ({ children, ...props }) => (
    <FocusScope>
      <GroupChildren childrenProps={pick(BUTTON_BASE_PROPS, props)}>
        {children}
      </GroupChildren>
    </FocusScope>
  )
);

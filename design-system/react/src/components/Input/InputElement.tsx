import { cx, styled } from "@fuel-ui/css";
import type { ReactNode } from "react";
import { Children, cloneElement, createElement } from "react";

import { createComponent } from "../../utils";

import { useInputProps } from "./Input";
import * as styles from "./styles";

export type InputElementProps = {
  element?: ReactNode;
};

export const ICON_SIZES = {
  sm: 16,
  md: 18,
  lg: 22,
};

const Root = styled("div");

const InputElement = createComponent<InputElementProps>(
  ({ element, className, children, ...props }) => {
    const { size, ...parentProps } = useInputProps();
    const disabled = parentProps?.isDisabled || parentProps?.isReadOnly;
    const classes = cx(
      "fuel_input--element",
      className,
      styles.element({ size })
    );

    const customChildren = Children.toArray(element || children).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child: any) => {
        const isButton =
          child?.type?.id === "Button" ||
          child?.type?.displayName?.toString().includes("button");

        if (isButton) {
          const childProps = child?.props;
          const defaultSize = size === "sm" ? "xs" : "sm";
          return cloneElement(child, {
            ...childProps,
            disabled,
            isDisabled: disabled,
            size: childProps.size || defaultSize,
          });
        }

        if (child?.type?.id === "Icon") {
          const childProps = child?.props;
          const defaultSize = ICON_SIZES[size || "md"];
          return cloneElement(child, {
            ...childProps,
            size: childProps.size || defaultSize,
          });
        }
        return child;
      }
    );

    return createElement(
      Root,
      { ...props, className: classes },
      customChildren
    );
  }
);

type InputElementObjProps = {
  id?: string;
};

export const InputElementLeft = createComponent<
  InputElementProps,
  InputElementObjProps
>(({ className, ...props }) => (
  <InputElement
    {...props}
    className={cx("fuel_input-element--left", className)}
  />
));

export const InputElementRight = createComponent<
  InputElementProps,
  InputElementObjProps
>(({ className, ...props }) => (
  <InputElement
    {...props}
    className={cx("fuel_input-element--right", className)}
  />
));

InputElementLeft.id = "InputElement";
InputElementRight.id = "InputElement";

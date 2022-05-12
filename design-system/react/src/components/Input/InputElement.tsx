import { cx, styled } from "@fuel/css";
import type { ReactNode } from "react";
import { Children, cloneElement, createElement } from "react";

import type { InputSizes } from "../../hooks/useInputState";
import { useInputState } from "../../hooks/useInputState";
import { createComponent } from "../../utils";

import * as styles from "./styles";

export type InputElementProps = {
  size?: InputSizes;
  element?: ReactNode;
  _parentId?: string;
};

export const ICON_SIZES = {
  sm: 16,
  md: 18,
  lg: 22,
};

const Root = styled("div");

const InputElement = createComponent<InputElementProps>(
  ({ element, size, className, children, _parentId, ...props }) => {
    const parentProps = useInputState(_parentId);
    const disabled = parentProps?.isDisabled || parentProps?.isReadOnly;
    const classes = cx(
      "fuel__input--element",
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
            disabled,
            isDisabled: disabled,
            size: childProps.size || defaultSize,
          });
        }

        if (child?.type?.id === "Icon") {
          const childProps = child?.props;
          const defaultSize = ICON_SIZES[size || "md"];
          return cloneElement(child, {
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

type OmitProps = "size";
type InputElementComponent = typeof InputElement & {
  id?: string;
};

export const InputElementLeft = createComponent<InputElementProps, OmitProps>(
  ({ className, ...props }) => (
    <InputElement
      {...props}
      className={cx("fuel_input-element--left", className)}
    />
  )
) as InputElementComponent;
InputElementLeft.id = "InputElement";

export const InputElementRight = createComponent<InputElementProps, OmitProps>(
  ({ className, ...props }) => (
    <InputElement
      {...props}
      className={cx("fuel_input-element--right", className)}
    />
  )
) as InputElementComponent;
InputElementRight.id = "InputElement";

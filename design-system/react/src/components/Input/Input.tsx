import { cx, styled } from "@fuel/css";
import cuid from "cuid";
import { Children, cloneElement, createElement } from "react";

import { useConstant } from "../../hooks";
import { createComponent } from "../../utils";

import { InputAddonLeft, InputAddonRight } from "./InputAddon";
import { InputElementLeft, InputElementRight } from "./InputElement";
import { InputField } from "./InputField";
import * as styles from "./styles";
import { useSetInputState } from "./useInputState";
import type { InputSizes } from "./useInputState";

export type InputProps = {
  size?: InputSizes;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
};

const Root = styled("div");

const InputBase = createComponent<InputProps>(
  ({
    size = "md",
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isFullWidth,
    className,
    children,
    ...props
  }) => {
    const id = useConstant(() => cuid());
    const disabled = isDisabled || isReadOnly;
    const classes = cx(
      "fuel_input",
      className,
      styles.input({
        size,
        disabled,
        required: isRequired,
        invalid: isInvalid,
        full: isFullWidth,
      })
    );

    useSetInputState(id, {
      size,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === "InputField") {
        return cloneElement(child, { _parentId: id });
      }
      if (
        child?.type?.id === "InputAddon" ||
        child?.type?.id === "InputElement"
      ) {
        return cloneElement(child, { ...child.props, size, _parentId: id });
      }
      return child;
    });

    const inputProps = {
      ...props,
      children: items,
      className: classes,
    };

    return createElement(Root, inputProps, items);
  }
);

type InputComponent = typeof InputBase & {
  AddonLeft: typeof InputAddonLeft;
  AddonRight: typeof InputAddonRight;
  ElementLeft: typeof InputElementLeft;
  ElementRight: typeof InputElementRight;
  Field: typeof InputField;
};

export const Input = InputBase as InputComponent;
Input.AddonLeft = InputAddonLeft;
Input.AddonRight = InputAddonRight;
Input.ElementLeft = InputElementLeft;
Input.ElementRight = InputElementRight;
Input.Field = InputField;

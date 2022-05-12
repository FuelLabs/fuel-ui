import { cx, styled } from "@fuel/css";
import { useFocusable } from "ariakit";
import { createElement } from "react";

import { createComponent } from "../../utils";
import type { HTMLProps } from "../../utils";
import { omit } from "../../utils/helpers";

import * as styles from "./styles";
import { useInputProps } from "./useInputProps";

type HTMLInputProps = HTMLProps["input"];
type OmitProps = "as" | "children";

export type InputFieldProps = Omit<HTMLInputProps, "size"> & {
  htmlSize?: HTMLInputProps["size"];
  _parentId?: string;
};

const Root = styled("input");

const InputFieldBase = createComponent<InputFieldProps, OmitProps>(
  ({
    _parentId: id,
    name: nameProp,
    htmlSize,
    role = "textbox",
    className,
    ...props
  }) => {
    const parentProps = useInputProps(id);
    const isRequired = parentProps?.isRequired;
    const isDisabled = parentProps?.isDisabled;
    const isReadOnly = parentProps?.isReadOnly;
    const isInvalid = parentProps?.isInvalid;

    const name = `${nameProp}`;
    const disabled = isDisabled || isReadOnly;
    const classes = cx(
      "fuel_input--field",
      className,
      styles.field({
        isRequired,
        isInvalid,
        isDisabled,
        isReadOnly,
      })
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const focusProps = omit(["children", "wrapElement"], useFocusable()) as any;
    const inputProps = {
      ...props,
      children: null,
      name,
      disabled,
      role,
      size: htmlSize,
      required: isRequired,
      "aria-required": isRequired,
      "aria-invalid": isInvalid,
      "aria-disabled": isDisabled,
      "aria-readonly": isReadOnly,
      "aria-placeholder": props.placeholder,
    };

    return createElement(Root, {
      ...focusProps,
      ...inputProps,
      className: classes,
    });
  }
);

type InputFieldComponent = typeof InputFieldBase & {
  id: string;
};
export const InputField = InputFieldBase as InputFieldComponent;
InputField.id = "InputField";

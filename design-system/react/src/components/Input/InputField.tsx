import { cx, styled } from "@fuels-ui/css";
import { createElement } from "react";

import { createComponent } from "../../utils";
import type { HTMLProps, CreateComponent } from "../../utils";

import { useInputProps } from "./Input";
import * as styles from "./styles";

type HTMLInputProps = HTMLProps["input"];
type OmitProps = "as" | "children";
export type InputFieldProps = Omit<HTMLInputProps, "size"> & {
  htmlSize?: HTMLInputProps["size"];
};

const Root = styled("input");

export const InputField = createComponent<InputFieldProps, OmitProps>(
  ({ name: nameProp, htmlSize, role = "textbox", className, ...props }) => {
    const parentProps = useInputProps();
    const isRequired = parentProps?.isRequired;
    const isDisabled = parentProps?.isDisabled;
    const isReadOnly = parentProps?.isReadOnly;
    const isInvalid = parentProps?.isInvalid;
    const describedBy = parentProps?.describedBy;

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

    const inputProps = {
      ...props,
      children: null,
      name,
      disabled,
      role,
      size: htmlSize,
      required: isRequired,
      "aria-describedby": describedBy,
      "aria-required": isRequired,
      "aria-invalid": isInvalid,
      "aria-disabled": isDisabled,
      "aria-readonly": isReadOnly,
      "aria-placeholder": props.placeholder,
    };

    return createElement(Root, {
      ...inputProps,
      className: classes,
    });
  }
) as CreateComponent<InputFieldProps, OmitProps> & {
  id: string;
};

InputField.id = "InputField";

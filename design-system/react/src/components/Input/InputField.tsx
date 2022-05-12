import { cx, styled } from "@fuel/css";
import { useFocusable } from "ariakit";
import { createElement } from "react";

import { createComponent } from "../../utils";
import type { HTMLProps, WithParentId, CreateComponent } from "../../utils";
import { omit } from "../../utils/helpers";

import * as styles from "./styles";
import { useInputProps } from "./useInputProps";

type HTMLInputProps = HTMLProps["input"];
type OmitProps = "as" | "children";

export type InputFieldProps = WithParentId<
  Omit<HTMLInputProps, "size"> & {
    htmlSize?: HTMLInputProps["size"];
  }
>;

const Root = styled("input");

export const InputField = createComponent<InputFieldProps, OmitProps>(
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
) as CreateComponent<InputFieldProps, OmitProps> & {
  id: string;
};

InputField.id = "InputField";

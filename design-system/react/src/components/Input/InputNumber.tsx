import { cx, styled } from "@fuel-ui/css";
import { useRef } from "react";
import { mergeProps, useFocusable } from "react-aria";
import type { NumberFormatPropsBase } from "react-number-format";
import NumberFormat from "react-number-format";

import { createComponent } from "../../utils";
import type { HTMLProps } from "../../utils";

import { useInputProps } from "./Input";
import type { InputFieldProps } from "./InputField";
import { InputField } from "./InputField";
import * as styles from "./styles";

type HTMLInputProps = HTMLProps["input"];
type OmitProps = "as" | "children";
export type InputNumberProps = Omit<HTMLInputProps, "size"> &
  NumberFormatPropsBase<Omit<InputFieldProps, "onBlur">> & {
    htmlSize?: HTMLInputProps["size"];
  };

type ObjProps = {
  id: string;
};

const Root = styled(NumberFormat, {});

export const InputNumber = createComponent<
  InputNumberProps,
  ObjProps,
  OmitProps
>(({ name: nameProp, htmlSize, role = "textbox", className, ...props }) => {
  const parentProps = useInputProps();
  const isRequired = parentProps?.isRequired;
  const isDisabled = parentProps?.isDisabled;
  const isReadOnly = parentProps?.isReadOnly;
  const isInvalid = parentProps?.isInvalid;
  const describedBy = parentProps?.describedBy;

  const name = `${nameProp}`;
  const disabled = isDisabled || isReadOnly;
  const classes = cx(
    "fuel_input--amount",
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
    role,
    name,
    disabled,
    size: htmlSize,
    required: isRequired,
    "aria-describedby": describedBy,
    "aria-required": isRequired,
    "aria-invalid": isInvalid,
    "aria-disabled": isDisabled,
    "aria-readonly": isReadOnly,
    "aria-placeholder": props.placeholder,
  };

  const ref = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { focusableProps } = useFocusable(props as any, ref);
  const customProps = mergeProps(inputProps, focusableProps);

  return (
    <Root
      {...customProps}
      className={classes}
      getInputRef={ref}
      customInput={InputField}
      onBlur={customProps.onBlur || undefined}
    />
  );
});

InputNumber.id = "InputNumber";

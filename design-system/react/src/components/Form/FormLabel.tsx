import { cx, styled } from "@fuels-ui/css";
import { createElement } from "react";

import type { CreateComponent, HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

import { useFormControlProps } from "./FormControl";
import * as styles from "./styles";

export type FormLabelProps = HTMLProps["label"];

const Root = styled("label");

export const FormLabel = createComponent<FormLabelProps>(
  ({ children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = cx(
      "fuel_form--label",
      className,
      styles.label({
        required: parentProps?.isRequired,
      })
    );

    const customProps = {
      ...props,
      id: id ? `label${id}` : props.id,
      className: classes,
    };

    return createElement(Root, customProps, children);
  }
) as CreateComponent<FormLabelProps> & {
  id: string;
};

FormLabel.id = "FormLabel";

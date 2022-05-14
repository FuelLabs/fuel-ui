import { cx, styled } from "@fuels-ui/css";
import * as Label from "@radix-ui/react-label";
import { createElement } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";

import { useFormControlProps } from "./FormControl";
import * as styles from "./styles";

export type FormLabelProps = Label.LabelProps;

const Root = styled(Label.Root);

export const FormLabel = createComponent<FormLabelProps>(
  ({ as = "label", children, className, ...props }) => {
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
      as,
      id: id ? `label${id}` : props.id,
      className: classes,
    };

    return createElement(Root, customProps, children);
  }
) as CreateComponent<FormLabelProps> & {
  id: string;
};

FormLabel.id = "FormLabel";

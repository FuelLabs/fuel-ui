import { cx, styled } from "@fuel/css";
import { createElement } from "react";

import type { CreateComponent, HTMLProps, WithParentId } from "../../utils";
import { createComponent } from "../../utils";

import * as styles from "./styles";
import { useFormControlProps } from "./useFormControlProps";

export type FormLabelProps = WithParentId<HTMLProps["label"]>;

const Root = styled("label");

export const FormLabel = createComponent<FormLabelProps>(
  ({ _parentId: id, children, className, ...props }) => {
    const parentProps = useFormControlProps(id);
    const classes = cx(
      "fuel_form--label",
      className,
      styles.label({
        required: parentProps?.isRequired,
      })
    );

    const customProps = {
      ...props,
      id: `label${id}`,
      className: classes,
    };

    return createElement(Root, customProps, children);
  }
) as CreateComponent<FormLabelProps> & {
  id: string;
};

FormLabel.id = "FormLabel";

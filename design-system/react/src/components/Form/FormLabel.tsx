import { cx, styled } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

import * as styles from "./styles";
import { useFormControlProps } from "./useFormControlProps";

export type FormLabelProps = HTMLProps["label"] & {
  _parentId?: string;
};

const Root = styled("label");
const FormLabelBase = createComponent<FormLabelProps>(
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
);

type FormLabelComponent = typeof FormLabelBase & {
  id: string;
};
export const FormLabel = FormLabelBase as FormLabelComponent;
FormLabel.id = "FormLabel";

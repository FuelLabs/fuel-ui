import { cx } from "@fuel/css";

import { createComponent } from "../../utils";
import type { TextProps } from "../Text";
import { Text } from "../Text";

import * as styles from "./styles";
import { useFormControlProps } from "./useFormControlProps";

export type FormHelperTextProps = TextProps & {
  _parentId?: string;
};

const FormHelperTextBase = createComponent<FormHelperTextProps>(
  ({ _parentId: id, as = "div", color, children, className, ...props }) => {
    const parentProps = useFormControlProps(id);
    const classes = cx(
      "fuel_form--helper-text",
      className,
      styles.helperText({})
    );

    const customProps = {
      ...props,
      id: `helperText${id}`,
      className: classes,
    };

    return (
      <Text
        as={as}
        {...customProps}
        color={color || "gray9"}
        aria-hidden={parentProps?.isInvalid}
      >
        {children}
      </Text>
    );
  }
);

type FormHelperTextComponent = typeof FormHelperTextBase & {
  id: string;
};
export const FormHelperText = FormHelperTextBase as FormHelperTextComponent;
FormHelperText.id = "FormHelperText";

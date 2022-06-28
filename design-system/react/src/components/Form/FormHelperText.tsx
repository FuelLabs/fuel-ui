import { cx } from "@test-changeset/css";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { TextProps } from "../Text";
import { Text } from "../Text";

import { useFormControlProps } from "./FormControl";
import * as styles from "./styles";

export type FormHelperTextProps = TextProps;

export const FormHelperText = createComponent<FormHelperTextProps>(
  ({ as = "div", color, children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
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
) as CreateComponent<FormHelperTextProps> & {
  id: string;
};

FormHelperText.id = "FormHelperText";

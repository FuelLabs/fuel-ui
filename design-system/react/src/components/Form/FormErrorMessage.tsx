import { cx } from "@test-changesets/css";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { TextProps } from "../Text";
import { Text } from "../Text";

import { useFormControlProps } from "./FormControl";
import * as styles from "./styles";

export type FormErrorMessageProps = TextProps;

export const FormErrorMessage = createComponent<FormErrorMessageProps>(
  ({ as = "div", color, children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = cx(
      "fuel_form--error-message",
      className,
      styles.errorMessage({})
    );

    const customProps = {
      ...props,
      id: `feedback${id}`,
      className: classes,
    };

    return (
      <Text
        as={as}
        {...customProps}
        color={color || "red9"}
        aria-hidden={!parentProps?.isInvalid}
      >
        {children}
      </Text>
    );
  }
) as CreateComponent<FormErrorMessageProps> & {
  id: string;
};

FormErrorMessage.id = "FormErrorMessage";

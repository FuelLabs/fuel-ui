import { cx } from "@fuels-ui/css";

import type { CreateComponent, WithParentId } from "../../utils";
import { createComponent } from "../../utils";
import type { TextProps } from "../Text";
import { Text } from "../Text";

import * as styles from "./styles";
import { useFormControlProps } from "./useFormControlProps";

export type FormErrorMessageProps = WithParentId<TextProps>;

export const FormErrorMessage = createComponent<FormErrorMessageProps>(
  ({ _parentId: id, as = "div", color, children, className, ...props }) => {
    const parentProps = useFormControlProps(id);
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

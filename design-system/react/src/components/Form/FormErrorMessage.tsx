import { cx } from "@fuel/css";

import { createComponent } from "../../utils";
import type { TextProps } from "../Text";
import { Text } from "../Text";

import * as styles from "./styles";
import { useFormControlProps } from "./useFormControlProps";

export type FormErrorMessageProps = TextProps & {
  _parentId?: string;
};

const FormErrorMessageBase = createComponent<FormErrorMessageProps>(
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
);

type FormErrorMessageComponent = typeof FormErrorMessageBase & {
  id: string;
};
export const FormErrorMessage =
  FormErrorMessageBase as FormErrorMessageComponent;
FormErrorMessage.id = "FormErrorMessage";

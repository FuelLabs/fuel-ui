import { cx, styled } from "@fuel/css";
import { Children, cloneElement, createElement, useId } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";
import { useSetFormControlProps } from "./useFormControlProps";

function getRightDescribedBy(ids: string[], id: string, isInvalid?: boolean) {
  if (isInvalid && ids.some((i) => i.includes("FormErrorMessage"))) {
    return `feedback${id}`;
  }
  if (ids.some((i) => i.includes("FormHelperText"))) {
    return `helperText${id}`;
  }
  return `label${id}`;
}

export type FormControlProps = {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

const Root = styled("div");
export const FormControl = createComponent<FormControlProps>(
  ({
    children,
    className,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...props
  }) => {
    const id = useId();
    const classes = cx("fuel_form--control", className, styles.control());

    const inputProps = {
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
    };
    useSetFormControlProps(id, inputProps);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childArr = Children.toArray(children) as any[];
    const childIds = childArr.map((child) => child?.type?.id);
    const describedBy = getRightDescribedBy(childIds, id, isInvalid);

    const items = childArr.map((child) => {
      if (child?.type?.id === "Input") {
        return cloneElement(child, { ...inputProps, describedBy });
      }
      if (child?.type?.id === "Checkbox") {
        return cloneElement(child, {
          "aria-describedby": describedBy,
          isDisabled,
          isReadOnly,
          required: isRequired,
        });
      }
      if (
        child?.type?.id === "FormLabel" ||
        child?.type?.id === "FormHelperText" ||
        child?.type?.id === "FormErrorMessage"
      ) {
        return cloneElement(child, { _parentId: id });
      }
      return child;
    });

    const customProps = {
      ...props,
      role: "group",
      className: classes,
    };

    return createElement(Root, customProps, items);
  }
);

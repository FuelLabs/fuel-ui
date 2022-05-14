import { cx, styled } from "@fuels-ui/css";
import {
  Children,
  createContext,
  createElement,
  useContext,
  useId,
} from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

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

type Context = FormControlProps & {
  id: string;
  describedBy?: string;
};

const ctx = createContext<Context>({ id: "" });
export function useFormControlProps() {
  return useContext(ctx);
}

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childArr = Children.toArray(children) as any[];
    const childIds = childArr.map((child) => child?.type?.id);
    const describedBy = getRightDescribedBy(childIds, id, isInvalid);

    const inputProps = {
      id,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      describedBy,
    };

    const customProps = {
      ...props,
      role: "group",
      className: classes,
    };

    return (
      <ctx.Provider value={inputProps}>
        {createElement(Root, customProps, children)}
      </ctx.Provider>
    );
  }
);

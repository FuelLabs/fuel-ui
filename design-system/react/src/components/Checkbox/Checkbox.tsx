import { cx, styled } from "@fuel/css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { createElement } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import { Icon } from "../Icon";

import * as styles from "./styles";

type OmitProps = "children" | "as";
export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  "aria-label": string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

const Root = styled(CheckboxPrimitive.Root);

export const Checkbox = createComponent<CheckboxProps, OmitProps>(
  ({ isDisabled, isReadOnly, className, ...props }) => {
    const disabled = isDisabled || isReadOnly;
    const classes = cx("fuel_checkbox", className, styles.root({ disabled }));

    const customProps = {
      ...props,
      disabled,
      "aria-disabled": disabled,
      "aria-readonly": isReadOnly,
      className: classes,
    };

    const customChildren = (
      <>
        <CheckboxPrimitive.CheckboxIndicator
          className={styles.indicator({ disabled })}
        >
          <Icon icon="BiCheck" size={18} />
        </CheckboxPrimitive.CheckboxIndicator>
      </>
    );
    return createElement(Root, customProps, customChildren);
  }
) as CreateComponent<CheckboxProps, OmitProps> & {
  id: string;
};

Checkbox.id = "Checkbox";

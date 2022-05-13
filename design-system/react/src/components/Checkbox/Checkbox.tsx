import { cx, styled } from "@fuel/css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { createElement } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import { Icon } from "../Icon";

import * as styles from "./styles";

type OmitProps = "children" | "as";
export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

const Root = styled(CheckboxPrimitive.Root);
export const Checkbox = createComponent<CheckboxProps, OmitProps>(
  ({ isDisabled, isReadOnly, className, ...props }) => {
    const disabled = isDisabled || isReadOnly;
    const classes = cx("fuel_checkbox", className, styles.root({ disabled }));
    const indicatorClass = styles.indicator({ disabled });

    const customProps = {
      ...props,
      disabled,
      "aria-disabled": disabled,
      "aria-readonly": isReadOnly,
      className: classes,
    };

    return createElement(
      Root,
      customProps,
      <CheckboxPrimitive.CheckboxIndicator className={indicatorClass}>
        <Icon icon="CheckIcon" />
      </CheckboxPrimitive.CheckboxIndicator>
    );
  }
) as CreateComponent<CheckboxProps, OmitProps> & {
  id: string;
};

Checkbox.id = "Checkbox";

import { cx, styled } from "@fuel/css";
import { createElement } from "react";

import { createComponent } from "../../utils";
import { omit } from "../../utils/helpers";

import * as styles from "./styles";
import type { InputSizes } from "./useInputState";

export type InputAddonProps = {
  size?: InputSizes;
};

const Root = styled("div");

const InputAddon = createComponent<InputAddonProps>(
  ({ size, className, children, ...props }) => {
    const classes = cx("fuel_input--addon", className, styles.addon({ size }));
    const filteredProps = omit(["_parentId"], props);
    const customProps = { ...filteredProps, className: classes };
    return createElement(Root, customProps, children);
  }
);

type OmitProps = "size" | "left" | "right";
type InputAddonComponent = typeof InputAddon & {
  id?: string;
};

export const InputAddonLeft = createComponent<InputAddonProps, OmitProps>(
  ({ className, ...props }) => (
    <InputAddon
      {...props}
      className={cx("fuel_input-addon--left", className)}
    />
  )
) as InputAddonComponent;
InputAddonLeft.id = "InputAddon";

export const InputAddonRight = createComponent<InputAddonProps, OmitProps>(
  ({ className, ...props }) => (
    <InputAddon
      {...props}
      className={cx("fuel_input-addon--right", className)}
    />
  )
) as InputAddonComponent;
InputAddonRight.id = "InputAddon";

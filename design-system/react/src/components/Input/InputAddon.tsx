/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx, styled } from "@fuel-ui/css";
import { createElement } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";

import { useInputProps } from "./Input";
import * as styles from "./styles";

const Root = styled("div");

const InputAddon = createComponent(({ className, children, ...props }) => {
  const { size } = useInputProps();
  const classes = cx("fuel_input--addon", className, styles.addon({ size }));
  const customProps = { ...props, className: classes };
  return createElement(Root, customProps, children);
});

type OmitProps = "left" | "right";
type InputAddonComponent = CreateComponent<any> & {
  id?: string;
};

export const InputAddonLeft = createComponent<any, OmitProps>(
  ({ className, ...props }) => (
    <InputAddon
      {...props}
      className={cx("fuel_input-addon--left", className)}
    />
  )
) as InputAddonComponent;

export const InputAddonRight = createComponent<any, OmitProps>(
  ({ className, ...props }) => (
    <InputAddon
      {...props}
      className={cx("fuel_input-addon--right", className)}
    />
  )
) as InputAddonComponent;

InputAddonLeft.id = "InputAddon";
InputAddonRight.id = "InputAddon";

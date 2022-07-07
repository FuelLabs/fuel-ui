import { cx, styled } from "@fuel-ui/css";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type SwitchProps = SwitchPrimitive.SwitchProps & {
  size?: "sm" | "md";
};

const Root = styled(SwitchPrimitive.Root);

export const Switch = createComponent<SwitchProps>(
  ({ size = "md", className, ...props }) => {
    const classes = cx("fuel_switch", className, styles.root({ size }));
    return createElement(
      Root,
      { ...props, className: classes },
      <SwitchPrimitive.SwitchThumb className={styles.thumb({ size })} />
    );
  }
);

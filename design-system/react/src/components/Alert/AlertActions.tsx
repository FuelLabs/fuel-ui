import { cx } from "@fuel-ui/css";
import { Children, cloneElement } from "react";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

import { useAlertProps } from "./Alert";
import * as styles from "./styles";

export type AlertActionsProps = FlexProps;

type ObjProps = {
  id: string;
};

const BUTTON_COLORS = {
  info: "blue",
  warning: "amber",
  success: "green",
  error: "red",
};

export const AlertActions = createComponent<AlertActionsProps, ObjProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_alert--actions", className, styles.actions());
    const customProps = { ...props, className: classes };

    const parentProps = useAlertProps();
    const defaultStatus = parentProps?.status || "info";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === "AlertButton") {
        return cloneElement(child, { color: BUTTON_COLORS[defaultStatus] });
      }
      return child;
    });

    return (
      <Flex as="footer" {...customProps}>
        {customChildren}
      </Flex>
    );
  }
);

AlertActions.id = "AlertActions";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from "@fuel/css";
import { Children, cloneElement, useId } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Icon } from "../Icon";

import { AlertActions } from "./AlertActions";
import { AlertButton } from "./AlertButton";
import { AlertDescription } from "./AlertDescription";
import { AlertTitle } from "./AlertTitle";
import * as styles from "./styles";
import type { AlertStatus } from "./useAlertProps";
import { useSetAlertProps } from "./useAlertProps";

export type AlertProps = BoxProps & {
  direction?: "row" | "column";
  status?: AlertStatus;
};

const STATUS_ICONS = {
  info: "BiInfoCircle",
  warning: "BiError",
  success: "BiCheckCircle",
  error: "BiXCircle",
};

export const Alert = createComponent<AlertProps>(
  ({
    direction = "column",
    status = "info",
    children,
    className,
    ...props
  }) => {
    const id = useId();
    const classes = cx(
      "fuel_alert",
      className,
      styles.root({ status, direction })
    );

    const customProps = { ...props, direction, className: classes };
    useSetAlertProps(id, { status });

    const items = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === "AlertActions") {
        return cloneElement(child, { _parentId: id });
      }
      return child;
    });

    return (
      <Box {...customProps}>
        <Box className="fuel_alert--icon">
          <Icon icon={STATUS_ICONS[status] as any} size={20} />
        </Box>
        <Flex className="fuel_alert--content">{items}</Flex>
      </Box>
    );
  }
) as CreateComponent<AlertProps> & {
  id: string;
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
  Actions: typeof AlertActions;
  Button: typeof AlertButton;
};

Alert.id = "Alert";
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Actions = AlertActions;
Alert.Button = AlertButton;

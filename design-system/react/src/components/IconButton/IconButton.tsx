import { cx } from "@fuel-ui/css";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import type { IconProps } from "../Icon";
import { Tooltip } from "../Tooltip";

type OmitProps = "leftIcon" | "rightIcon" | "justIcon";
export type IconButtonProps = Omit<ButtonProps, OmitProps> & {
  size?: "xs" | "sm" | "md";
  "aria-label": string;
  icon: IconProps["icon"];
  tooltip?: ReactNode;
};

export const IconButton = createComponent<IconButtonProps, OmitProps>(
  ({ icon, tooltip, className, ...props }) => {
    const classes = cx("fuel_icon-buton", className);
    const content = (
      <Button
        {...props}
        justIcon
        className={classes}
        leftIcon={icon}
        {...(tooltip && {
          onClick: props.onClick || props.onPress,
          onPress: null,
        })}
      />
    );

    if (tooltip) {
      return <Tooltip content={tooltip}>{content}</Tooltip>;
    }
    return content;
  }
);

import { cx } from "@fuel/css";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import type { IconProps } from "../Icon";
import { Tooltip } from "../Tooltip";

type OmitProps = "leftIcon" | "rightIcon" | "justIcon";
export type IconButtonProps = Omit<ButtonProps, OmitProps> & {
  icon: IconProps["icon"];
  "aria-label": string;
  tooltip?: ReactNode;
};

export const IconButton = createComponent<IconButtonProps, OmitProps>(
  ({ icon, tooltip, className, ...props }) => {
    const classes = cx("fuel_icon-buton", className);
    const content = (
      <Button {...props} className={classes} leftIcon={icon} justIcon />
    );

    if (tooltip) {
      return <Tooltip content={<>{tooltip}</>}>{content}</Tooltip>;
    }
    return content;
  }
);

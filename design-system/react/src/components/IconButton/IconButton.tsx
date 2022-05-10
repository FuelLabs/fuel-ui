import { cx } from "@fuel/css";

import { createComponent } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import type { IconProps } from "../Icon";

type OmitProps = "leftIcon" | "rightIcon" | "justIcon";
export type IconButtonProps = ButtonProps & {
  "aria-label": string;
  icon: IconProps["icon"];
};

export const IconButton = createComponent<IconButtonProps, OmitProps>(
  ({ icon, className, ...props }) => {
    const classes = cx("fuel_icon-buton", className);
    return <Button {...props} className={classes} leftIcon={icon} justIcon />;
  }
);

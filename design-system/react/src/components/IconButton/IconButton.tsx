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
  ({ icon, ...props }) => <Button {...props} leftIcon={icon} justIcon />
);

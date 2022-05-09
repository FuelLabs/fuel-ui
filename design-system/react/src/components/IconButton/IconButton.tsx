import type { ReactElement } from "react";

import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import type { Icons } from "../Icon";

import { createComponent } from "@/utils";

type OmitProps = "leftIcon" | "rightIcon" | "justIcon";
export type IconButtonProps = ButtonProps & {
  "aria-label": string;
  icon: Icons | ReactElement;
};

export const IconButton = createComponent<IconButtonProps, OmitProps>(
  ({ icon, ...props }) => <Button {...props} leftIcon={icon} justIcon />
);

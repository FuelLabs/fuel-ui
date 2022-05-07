import type { ReactElement } from "react";

import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import type { Icons } from "../Icon";

import { createComponent } from "@/utils";

type CustomButtonProps = Omit<
  ButtonProps,
  "leftIcon" | "rightIcon" | "justIcon"
>;

export type IconButtonProps = CustomButtonProps & {
  "aria-label": string;
  icon: Icons | ReactElement;
};

export const IconButton = createComponent<IconButtonProps>(
  ({ icon, ...props }) => <Button {...props} leftIcon={icon} justIcon />
);

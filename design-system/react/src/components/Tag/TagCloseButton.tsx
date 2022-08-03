import { cx } from "@fuel-ui/css";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { IconButtonProps } from "../IconButton";
import { IconButton } from "../IconButton";

export type TagCloseButtonsProp = Omit<IconButtonProps, "icon" | "aria-label">;

export const TagCloseButton = createComponent<TagCloseButtonsProp>(
  ({ className, ...props }) => {
    const classes = cx("fuel_tag--close-btn", className);
    return (
      <IconButton
        {...props}
        aria-label="close"
        icon="X"
        variant="link"
        className={classes}
      />
    );
  }
) as CreateComponent<TagCloseButtonsProp> & {
  id: string;
};

TagCloseButton.id = "TagCloseButton";

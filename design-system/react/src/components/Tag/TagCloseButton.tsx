import { cx } from "@fuel/css";

import { createComponent } from "../../utils";
import type { IconButtonProps } from "../IconButton";
import { IconButton } from "../IconButton";

export type TagCloseButtonsProp = Omit<IconButtonProps, "icon" | "aria-label">;

const TagCloseButtonBase = createComponent<TagCloseButtonsProp>(
  ({ className, ...props }) => {
    const classes = cx("fuel_tag--close-btn", className);
    return (
      <IconButton
        {...props}
        aria-label="close"
        icon="BiX"
        variant="link"
        className={classes}
      />
    );
  }
);

/**
 * This is used inside children iteration in <Tag> component
 */
type TagCloseButtonComponent = typeof TagCloseButtonBase & {
  id: string;
};

export const TagCloseButton = TagCloseButtonBase as TagCloseButtonComponent;
TagCloseButton.id = "TagCloseButton";

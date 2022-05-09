import type { IconButtonProps } from "../IconButton";
import { IconButton } from "../IconButton";

import { createComponent } from "@/utils";

export type TagCloseButtonsProp = Omit<IconButtonProps, "icon" | "aria-label">;

export const TagCloseButton = createComponent<TagCloseButtonsProp>((props) => (
  <IconButton {...props} aria-label="close" icon="BiX" variant="link" />
));

TagCloseButton.displayName = "TagCloseButton";

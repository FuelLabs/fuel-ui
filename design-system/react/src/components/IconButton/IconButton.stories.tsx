import { Box } from "../Box";

import type { IconButtonProps } from "./IconButton";
import { IconButton } from "./IconButton";

export default {
  component: IconButton,
  title: "UI/IconButton",
};

export const Usage = (args: IconButtonProps) => (
  <Box css={{ display: "flex", gap: "$2" }}>
    <IconButton {...args} aria-label="Button" icon="CalendarIcon" />
  </Box>
);

export const WithTooltip = (args: IconButtonProps) => (
  <Box css={{ display: "flex", gap: "$2" }}>
    <IconButton
      {...args}
      aria-label="Button"
      icon="CalendarIcon"
      tooltip="View Calendar"
    />
  </Box>
);

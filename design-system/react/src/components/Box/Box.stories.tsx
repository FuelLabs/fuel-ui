import type { BoxProps } from "./Box";
import { Box } from "./Box";

export default {
  component: Box,
  title: "Base/Box",
  argTypes: {},
};

export const Usage = (args: BoxProps) => <Box {...args}>Hello world</Box>;

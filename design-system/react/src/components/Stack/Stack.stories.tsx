import { Box } from "../Box";

import type { StackProps } from "./Stack";
import { Stack } from "./Stack";

export default {
  component: Stack,
  title: "Layout/Stack",
  argTypes: {},
};

export const Usage = (args: StackProps) => (
  <Stack {...args}>
    <Box css={{ background: "$gray7" }}>&nbsp;</Box>
    <Box css={{ background: "$gray7" }}>&nbsp;</Box>
    <Box css={{ background: "$gray7" }}>&nbsp;</Box>
    <Box css={{ background: "$gray7" }}>&nbsp;</Box>
  </Stack>
);

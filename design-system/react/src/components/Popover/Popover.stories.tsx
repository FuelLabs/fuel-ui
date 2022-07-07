import { Box } from "../Box";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";

import type { PopoverProps } from "./Popover";
import { Popover } from "./Popover";

export default {
  component: Popover,
  title: "Overlay/Popover",
  parameters: {
    layout: "fullscreen",
  },
};

const popoverContent = (
  <Box css={{ maxW: "200px" }}>
    <Heading as="h5" css={{ m: "$0", mb: "$2" }}>
      Some title
    </Heading>
    <Text css={{ m: "$0", color: "$gray10" }} fontSize="sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo ullam
      labore libero necessitatibus harum aliquam voluptas at expedita
    </Text>
  </Box>
);

export const Usage = (args: PopoverProps) => (
  <Popover {...args} content={popoverContent} showCloseButton>
    <Button>Click here</Button>
  </Popover>
);

Usage.parameters = {
  layout: "centered",
};

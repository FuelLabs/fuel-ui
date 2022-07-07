import { Stack } from "../Stack";

import type { HeadingProps } from "./Heading";
import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Base/Typography/Heading",
  argTypes: {},
};

export const Usage = (args: HeadingProps) => (
  <Stack gap="$4">
    <Heading {...args} css={{ m: "0" }} as="h1">
      Some title
    </Heading>
    <Heading {...args} css={{ m: "0" }} as="h2">
      Some title
    </Heading>
    <Heading {...args} css={{ m: "0" }} as="h3">
      Some title
    </Heading>
    <Heading {...args} css={{ m: "0" }} as="h4">
      Some title
    </Heading>
    <Heading {...args} css={{ m: "0" }} as="h5">
      Some title
    </Heading>
    <Heading {...args} css={{ m: "0" }} as="h6">
      Some title
    </Heading>
  </Stack>
);

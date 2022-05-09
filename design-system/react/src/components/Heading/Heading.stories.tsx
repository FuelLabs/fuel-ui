import type { HeadingProps } from "./Heading";
import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Base/Typography/Heading",
  argTypes: {},
};

export const Usage = (args: HeadingProps) => (
  <Heading {...args}>Some title</Heading>
);

import type { HeadingProps } from "./Heading";
import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Base/Heading",
  argTypes: {},
};

export const Usage = (args: HeadingProps) => (
  <Heading {...args}>Some title</Heading>
);

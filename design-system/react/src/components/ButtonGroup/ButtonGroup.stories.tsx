import { Button } from "../Button";

import type { ButtonGroupProps } from "./ButtonGroup";
import { ButtonGroup } from "./ButtonGroup";

export default {
  component: ButtonGroup,
  title: "UI/ButtonGroup",
  argTypes: {},
};

export const Usage = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>First</Button>
    <Button leftIcon="Calendar">Second</Button>
    <Button>Third</Button>
  </ButtonGroup>
);

import { Button } from "../Button";

import type { ButtonGroupProps } from "./ButtonGroup";
import { ButtonGroup } from "./ButtonGroup";

export default {
  component: ButtonGroup,
  title: "UI/ButtonGroup",
  argTypes: {},
};

export const Usage = (args: ButtonGroupProps) => (
  <ButtonGroup {...args} color="blue" size="sm">
    <Button>First</Button>
    <Button leftIcon="CalendarIcon">Second</Button>
    <Button leftIcon="CalendarIcon">Second</Button>
    <Button>Third</Button>
  </ButtonGroup>
);

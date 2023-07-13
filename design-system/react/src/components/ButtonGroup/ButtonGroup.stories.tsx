import { Button } from '../Button';

import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupProps } from './defs';

export default {
  component: ButtonGroup,
  title: 'UI/ButtonGroup',
  argTypes: {},
};

export const Usage = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>First</Button>
    <Button leftIcon="Calendar">Second</Button>
    <Button>Third</Button>
  </ButtonGroup>
);

import { Box } from '../Box';

import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

export default {
  component: Accordion,
  title: 'UI/Accordion',
  argTypes: {},
};

export const Usage = (args: AccordionProps) => (
  <Box css={{ maxW: '$lg' }}>
    <Accordion {...args} type="single" defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What&apos;s Fuel?</Accordion.Trigger>
        <Accordion.Content>
          The world&apos;s fastest modular execution layer.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it really fast?</Accordion.Trigger>
        <Accordion.Content>Yes, it&apos;s blazingly fast.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Box>
);

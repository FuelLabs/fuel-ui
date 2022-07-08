import { Box } from "../Box";

import type { AccordionProps } from "./Accordion";
import { Accordion } from "./Accordion";

export default {
  component: Accordion,
  title: "UI/Accordion",
  argTypes: {},
};

export const Usage = (args: AccordionProps) => (
  <Box css={{ maxW: "$lg" }}>
    <Accordion {...args} type="single" defaultValue="item-1" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What&apos; Fuel?</Accordion.Trigger>
        <Accordion.Content>
          The fastest execution modular blokchain
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is really fast?</Accordion.Trigger>
        <Accordion.Content>Yes, blazingly fast!</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Box>
);

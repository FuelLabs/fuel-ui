import { Box } from "../Box";
import { Button } from "../Button";
import { Heading } from "../Heading";

import type { CardProps } from "./Card";
import { Card } from "./Card";

export default {
  component: Card,
  title: "UI/Card",
  argTypes: {},
};

export const Usage = (args: CardProps) => (
  <Box css={{ maxW: "400px" }}>
    <Card {...args}>
      <Card.Body>Hello world</Card.Body>
    </Card>
  </Box>
);

export const WithHeader = (args: CardProps) => (
  <Box css={{ maxW: "400px" }}>
    <Card {...args}>
      <Card.Header>
        <Heading as="h3">Welcome Fuel</Heading>
      </Card.Header>
      <Card.Body>We are the fastest modular execution layer</Card.Body>
    </Card>
  </Box>
);

export const WithFooter = (args: CardProps) => (
  <Box css={{ maxW: "400px" }}>
    <Card {...args}>
      <Card.Header>
        <Heading as="h3">Title</Heading>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
        rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac,
        efficitur a sem.
      </Card.Body>
      <Card.Footer gap="$3" direction="row-reverse">
        <Button size="sm" variant="outlined">
          Click
        </Button>
        <Button size="sm" variant="outlined" color="red">
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  </Box>
);

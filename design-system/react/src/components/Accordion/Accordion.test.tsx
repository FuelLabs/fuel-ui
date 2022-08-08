import { testA11y } from "@fuel-ui/test-utils";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("a11y", async () => {
    await testA11y(
      <Accordion type="single" defaultValue="item-1">
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
    );
  });
});

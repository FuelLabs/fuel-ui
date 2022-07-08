import { testA11y } from "@fuel-ui/test-utils";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("a11y", async () => {
    await testA11y(<Accordion>Hello world</Accordion>);
  });
});

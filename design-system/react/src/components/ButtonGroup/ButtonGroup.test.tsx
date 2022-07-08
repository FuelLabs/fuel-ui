import { testA11y } from "@fuel-ui/test-utils";

import { ButtonGroup } from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("a11y", async () => {
    await testA11y(<ButtonGroup>Hello world</ButtonGroup>);
  });
});

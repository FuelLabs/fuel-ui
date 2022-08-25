import { testA11y } from "@fuel-ui/test-utils";

import { Logo } from "./Logo";

describe("Logo", () => {
  it("a11y", async () => {
    await testA11y(<Logo>Hello world</Logo>);
  });
});

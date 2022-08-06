import { press, render, testA11y, screen } from "@fuel-ui/test-utils";

import { CardList } from "./CardList";

describe("CardList", () => {
  it("a11y", async () => {
    await testA11y(<CardList>Hello world</CardList>);
  });

  it("should ...", async () => {
    // render(<CardList>Hello world</CardList>);
    // expect()
  });
});

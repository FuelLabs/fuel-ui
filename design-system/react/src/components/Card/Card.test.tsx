import { testA11y } from "@fuel/test-utils";

import { Card } from "./Card";

describe("Card", () => {
  it("a11y", async () => {
    await testA11y(<Card>Hello world</Card>);
  });
});

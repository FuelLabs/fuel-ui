import { testA11y } from "@fuel/test-utils";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("a11y", async () => {
    await testA11y(<Alert>Hello world</Alert>);
  });
});

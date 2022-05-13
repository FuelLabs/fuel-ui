import { testA11y } from "@fuels-ui/test-utils";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("a11y", async () => {
    await testA11y(<Alert>Hello world</Alert>);
  });
});

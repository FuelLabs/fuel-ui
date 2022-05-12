import { testA11y } from "@fuel/test-utils";

import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("a11y", async () => {
    await testA11y(<IconButton aria-label="Button" icon="BiCalendar" />);
  });
});
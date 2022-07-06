import { testA11y } from "@fuel-ui/test-utils";

import { Button } from "../Button";

import { Dialog } from "./Dialog";

describe("Dialog", () => {
  it("a11y", async () => {
    await testA11y(
      <Dialog>
        <Dialog.Trigger>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Heading>Dialog Title</Dialog.Heading>
          <Dialog.Description>
            Just a big text with a nice description here
          </Dialog.Description>
          <Dialog.Footer>
            <Dialog.Close>
              <Button color="gray">Close</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  });
});

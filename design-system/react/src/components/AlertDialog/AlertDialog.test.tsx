import { testA11y } from "@test-changeset/test-utils";

import { Button } from "../Button";

import { AlertDialog } from "./AlertDialog";

describe("AlertDialog", () => {
  it("a11y", async () => {
    await testA11y(
      <AlertDialog>
        <AlertDialog.Trigger>
          <Button color="tomato">Delete</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Heading>Are you absolutely sure?</AlertDialog.Heading>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>
              <Button color="gray">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="outlined" color="tomato">
                Confirm
              </Button>
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    );
  });
});

import { Button } from "../Button";

import { Dialog } from "./Dialog";

export default {
  component: Dialog,
  title: "Overlay/Dialog",
  parameters: {
    layout: "fullscreen",
  },
};

export const Usage = () => (
  <Dialog>
    <Dialog.Trigger>
      <Button>Open</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Heading>Hello World</Dialog.Heading>
      <Dialog.Description>
        Just a big text with a nice description here
      </Dialog.Description>
      <Dialog.Footer>
        <Dialog.Close>
          <Button variant="outlined" color="tomato">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button>Save</Button>
        </Dialog.Close>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog>
);

Usage.parameters = {
  layout: "centered",
};

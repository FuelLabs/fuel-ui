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
      <Dialog.Heading>Dialog Title</Dialog.Heading>
      <Dialog.Description>
        Just a big text with a nice description here
      </Dialog.Description>
      <Dialog.Footer>
        <Dialog.Close>
          <Button color="gray" variant="ghost">
            Close
          </Button>
        </Dialog.Close>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog>
);

Usage.parameters = {
  layout: "centered",
};

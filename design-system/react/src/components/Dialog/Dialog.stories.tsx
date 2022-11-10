import { Button } from '../Button';

import { Dialog } from './Dialog';
import type { DialogProps } from './Dialog';

export default {
  component: Dialog,
  title: 'Overlay/Dialog',
  parameters: {
    layout: 'centered',
  },
};

export const Usage = (args: DialogProps) => {
  return (
    <Dialog {...args}>
      <Dialog.Trigger>
        <Button>Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Close />
        <Dialog.Heading>Dialog Title</Dialog.Heading>
        <Dialog.Description>
          Just a big text with a nice description here
        </Dialog.Description>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button color="gray" variant="ghost">
              Close
            </Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

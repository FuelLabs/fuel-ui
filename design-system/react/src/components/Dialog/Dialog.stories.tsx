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
            <Button intent="base" variant="ghost">
              Close
            </Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export const WithoutTrigger = (args: DialogProps) => {
  return (
    <Dialog {...args} isOpen>
      <Dialog.Content>
        <Dialog.Heading>Dialog Title</Dialog.Heading>
        <Dialog.Description>
          Just a big text with a nice description here
        </Dialog.Description>
      </Dialog.Content>
    </Dialog>
  );
};

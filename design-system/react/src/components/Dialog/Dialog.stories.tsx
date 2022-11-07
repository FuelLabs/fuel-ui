import { useOverlayTriggerState } from 'react-stately';
import type { OverlayTriggerState } from 'react-stately';

import { Button } from '../Button';

import { Dialog } from './Dialog';
import type { DialogProps } from './Dialog';

export default {
  component: Dialog,
  title: 'Overlay/Dialog',
  parameters: {
    layout: 'fullscreen',
  },
};

const Content = (props: DialogProps) => {
  return (
    <Dialog {...props}>
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
};

export const Usage = (args: DialogProps) => {
  const storyState: OverlayTriggerState = useOverlayTriggerState({});
  return (
    <Dialog.Provider>
      <Content {...args} state={storyState} />
    </Dialog.Provider>
  );
};

Usage.parameters = {
  layout: 'centered',
};

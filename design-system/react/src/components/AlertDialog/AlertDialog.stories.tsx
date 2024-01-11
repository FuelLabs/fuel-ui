import { Button } from '../Button';
import { Dialog } from '../Dialog';

import { AlertDialog } from './AlertDialog';

export default {
  component: AlertDialog,
  title: 'Overlay/AlertDialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = () => (
  <AlertDialog>
    <AlertDialog.Trigger>
      <Button intent="error">Delete</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content>
      <AlertDialog.Heading>Are you absolutely sure?</AlertDialog.Heading>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialog.Description>
      <AlertDialog.Footer>
        <AlertDialog.Cancel>
          <Button intent="base" variant="ghost">
            Cancel
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="outlined" intent="error">
            Confirm
          </Button>
        </AlertDialog.Action>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
);

Usage.parameters = {
  layout: 'centered',
};

export const InsideDialog = () => {
  return (
    <Dialog isOpen>
      <Dialog.Content>
        <AlertDialog>
          <AlertDialog.Trigger>
            <Button intent="error">Delete</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Heading>Are you absolutely sure?</AlertDialog.Heading>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>
                <Button intent="base" variant="ghost">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="outlined" intent="error">
                  Confirm
                </Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Dialog.Content>
    </Dialog>
  );
};

InsideDialog.parameters = {
  layout: 'centered',
};

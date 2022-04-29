import { BoxCentered } from '../BoxCentered'
import { Button } from '../Button'
import { AlertDialog } from './AlertDialog'

export default {
  component: AlertDialog,
  title: 'Overlay/AlertDialog',
  layout: 'fullscreen',
}

export const Usage = () => {
  return (
    <BoxCentered minHS minWS>
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
    </BoxCentered>
  )
}

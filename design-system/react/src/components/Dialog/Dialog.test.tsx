import { render, screen, testA11y } from '@fuel-ui/test-utils';

import { Button } from '../Button';

import type { DialogProps } from './Dialog';
import { Dialog } from './Dialog';

function Content(props: Omit<DialogProps, 'children'>) {
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
            <Button color="gray">Close</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}

describe('Dialog', () => {
  it('a11y', async () => {
    await testA11y(<Content />);
  });

  it('should open and close dialog correctly', async () => {
    const onOpen = jest.fn();
    const { user } = render(<Content onOpenChange={onOpen} />);

    const trigger = screen.getByText('Open');
    expect(() => screen.getByText('Dialog Title')).toThrow();

    await user.click(trigger);
    expect(await screen.findByText('Dialog Title')).toBeInTheDocument();
    expect(onOpen).toBeCalledTimes(1);

    await user.press('Enter');
    expect(() => screen.getByText('Dialog Title')).toThrow();
  });

  it('should open by default without trigger', async () => {
    render(<Content isOpen />);
    expect(await screen.findByText('Dialog Title')).toBeInTheDocument();
  });
});

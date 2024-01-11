import { render, testA11y, screen, fireEvent, press } from '@fuels/jest';

import { Icon } from '../Icon';

import { Dropdown } from './Dropdown';
import type { DropdownProps } from './defs';

const Content = (props: Partial<DropdownProps>) => {
  return (
    <Dropdown {...props}>
      <Dropdown.Trigger>Click here</Dropdown.Trigger>
      <Dropdown.Menu autoFocus disabledKeys={['edit']} aria-label="Actions">
        <Dropdown.MenuItem key="settings" textValue="Settings">
          <Icon icon="Settings" />
          Settings
        </Dropdown.MenuItem>
        <Dropdown.MenuItem key="trash" textValue="Delete">
          <Icon icon="Trash" />
          Delete
        </Dropdown.MenuItem>
        <Dropdown.MenuItem key="edit" textValue="Edit">
          <Icon icon="Edit" />
          Edit
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

function getButton() {
  return screen.getByRole('button', { name: /click here/i });
}
function getSettings() {
  return screen.getByRole('menuitem', { name: /settings/i });
}

describe('Dropdown', () => {
  it('a11y', async () => {
    await testA11y(<Content />);
  });

  it('should open dropdown menu when click on trigger', async () => {
    const { user } = render(<Content />);

    expect(() => getSettings()).toThrow();
    const trigger = getButton();
    await user.click(trigger);

    expect(getSettings()).toBeInTheDocument();
  });

  it('should close when click on menu item', async () => {
    render(<Content />);

    const trigger = getButton();
    fireEvent.click(trigger);

    const menuItem = getSettings();
    fireEvent.click(menuItem);

    expect(() => getSettings()).toThrow();
  });

  it('should close when press esc', async () => {
    render(<Content />);

    const trigger = getButton();
    fireEvent.click(trigger);

    await press('Esc');
    expect(() => getSettings()).toThrow();
  });
});

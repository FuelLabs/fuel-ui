import { render, testA11y, screen, fireEvent } from '@fuels/jest';

import { Button } from '../Button';
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

describe('Dropdown', () => {
  it('a11y', async () => {
    await testA11y(<Content />);
  });

  it('should open dropdown menu when click on trigger', async () => {
    render(<Content />);

    expect(() => screen.getByText('Settings')).toThrow();
    const trigger = screen.getByText('Click here');
    fireEvent.click(trigger);

    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('should close when click on menu item', async () => {
    render(<Content />);

    const trigger = screen.getByText('Click here');
    fireEvent.click(trigger);

    const menuItem = screen.getByText('Settings');
    fireEvent.click(menuItem);

    expect(() => screen.getByText('Settings')).toThrow();
  });

  it('should close when click outside', async () => {
    render(
      <>
        <Content />
        <Button>Foo</Button>
      </>,
    );

    const trigger = screen.getByText('Click here');
    fireEvent.click(trigger);

    const fooBtn = screen.getByText('Foo');
    fireEvent.click(fooBtn);

    expect(() => screen.getByText('Settings')).toThrow();
  });

  it('should close when press esc', async () => {
    const { user } = render(<Content />);

    const trigger = screen.getByText('Click here');
    fireEvent.click(trigger);
    await user.press('Escape');
    expect(() => screen.getByText('Settings')).toThrow();
  });
});

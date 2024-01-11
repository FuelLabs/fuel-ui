import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { Icon } from '../Icon';

import { Dropdown } from './Dropdown';
import type { DropdownProps } from './defs';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Overlay/Dropdown',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const Content = (props: Partial<DropdownProps> & { children: ReactNode }) => {
  return (
    <Dropdown {...props}>
      {props.children}
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

export const Usage: Story = {
  render: (args) => (
    <Content {...args}>
      <Dropdown.Trigger>Click here</Dropdown.Trigger>
    </Content>
  ),
};

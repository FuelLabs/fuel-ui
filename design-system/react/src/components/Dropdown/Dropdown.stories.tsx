import type { ReactNode } from 'react';
import { useState } from 'react';

import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { Dropdown } from './Dropdown';
import type { DropdownProps } from './defs';

export default {
  component: Dropdown,
  title: 'Overlay/Dropdown',
  parameters: {
    layout: 'fullscreen',
  },
};

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

export const Usage = (args: DropdownProps) => (
  <Content {...args}>
    <Dropdown.Trigger asChild={false}>Click here</Dropdown.Trigger>
  </Content>
);

Usage.parameters = {
  layout: 'centered',
};

export const AsChild = (args: DropdownProps) => (
  <Content {...args}>
    <Dropdown.Trigger asChild>
      <Button>Click here</Button>
    </Dropdown.Trigger>
  </Content>
);

AsChild.parameters = {
  layout: 'centered',
};

export const Controlled = (args: DropdownProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <Stack gap="$2" direction="row">
      <Button onPress={() => setOpened(true)} variant="ghost">
        Open
      </Button>
      <Content {...args} isOpen={opened} onOpenChange={setOpened}>
        <Dropdown.Trigger asChild={false}>Click here</Dropdown.Trigger>
      </Content>
    </Stack>
  );
};

Controlled.parameters = {
  layout: 'centered',
};

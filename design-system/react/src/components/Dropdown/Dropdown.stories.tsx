import { useState } from 'react';

import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { Icon } from '../Icon';

import type { DropdownProps } from './Dropdown';
import { Dropdown } from './Dropdown';

export default {
  component: Dropdown,
  title: 'Overlay/Dropdown',
  parameters: {
    layout: 'fullscreen',
  },
};

const Content = (props: Partial<DropdownProps>) => {
  return (
    <Dropdown {...props}>
      <Dropdown.Trigger>
        <Button>Click here</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu autoFocus disabledKeys={['edit']} aria-label="Actions">
        <Dropdown.MenuItem key="settings" textValue="Settings">
          <Icon icon="Gear" />
          Settings
        </Dropdown.MenuItem>
        <Dropdown.MenuItem key="trash" textValue="Delete">
          <Icon icon="Trash" />
          Delete
        </Dropdown.MenuItem>
        <Dropdown.MenuItem key="edit" textValue="Edit">
          <Icon icon="NotePencil" />
          Edit
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Usage = (args: DropdownProps) => <Content {...args} />;

Usage.parameters = {
  layout: 'centered',
};

export const Controlled = (args: DropdownProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <Stack gap="$2" direction="row">
      <Button onPress={() => setOpened(true)} variant="ghost">
        Open
      </Button>
      <Content {...args} isOpen={opened} onOpenChange={setOpened} />
    </Stack>
  );
};

Controlled.parameters = {
  layout: 'centered',
};

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '../Box';
import { Icon } from '../Icon';

import type { MenuProps } from './Menu';
import { Menu } from './Menu';

export default {
  component: Menu,
  title: 'UI/Menu',
  argTypes: {
    autoFocus: {
      defaultValue: true,
      control: 'boolean',
    },
    autoFocusKey: {
      defaultValue: undefined,
      control: 'text',
    },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: MenuProps) => (
  <Box css={{ width: '200px' }}>
    <Menu {...args} disabledKeys={['edit']} aria-label="Actions">
      <Menu.Item key="settings" textValue="Settings">
        <Icon icon="Gear" css={{ color: '$gray8' }} />
        Settings
      </Menu.Item>
      <Menu.Item key="profile" textValue="Profile">
        <Icon icon="User" css={{ color: '$gray8' }} />
        Profile
      </Menu.Item>
      <Menu.Item key="trash" textValue="Remove">
        <Icon icon="Trash" css={{ color: '$gray8' }} />
        Remove
      </Menu.Item>
      <Menu.Item key="edit" textValue="Edit">
        <Icon icon="NotePencil" css={{ color: '$gray8' }} />
        Edit
      </Menu.Item>
    </Menu>
  </Box>
);

export const Usage = Template.bind({});
Usage.args = {};

export const AutoFocusItem = Template.bind({});
AutoFocusItem.args = {
  autoFocusKey: 'profile',
};

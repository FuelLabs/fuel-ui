/// <reference types="@storybook/types" />
import type { StoryFn } from "@storybook/react"

import { Box } from "../Box"
import { Icon } from "../Icon"

import type { MenuProps } from "./Menu"
import { Menu } from "./Menu"

export default {
  component: Menu,
  title: "UI/Menu",
  argTypes: {
    autoFocus: {
      defaultValue: true,
      control: "boolean",
    },
    autoFocusKey: {
      defaultValue: undefined,
      control: "text",
    },
  },
}

const Template: StoryFn<typeof Menu> = (args: MenuProps) => (
  <Box css={{ width: "200px" }}>
    <Menu {...args} disabledKeys={["edit"]} aria-label="Actions">
      <Menu.Item key="settings" textValue="Settings">
        <Icon icon="Settings" />
        Settings
      </Menu.Item>
      <Menu.Item key="profile" textValue="Profile">
        <Icon icon="User" />
        Profile
      </Menu.Item>
      <Menu.Item key="trash" textValue="Remove">
        <Icon icon="Trash" />
        Remove
      </Menu.Item>
      <Menu.Item key="edit" textValue="Edit">
        <Icon icon="Edit" />
        Edit
      </Menu.Item>
    </Menu>
  </Box>
)

export const Usage = Template.bind({})
Usage.args = {}

export const AutoFocusItem = Template.bind({})
AutoFocusItem.args = {
  autoFocusKey: "profile",
}

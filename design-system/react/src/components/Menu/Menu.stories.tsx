import { Box } from "../Box";
import { Icon } from "../Icon";

import type { MenuProps } from "./Menu";
import { Menu } from "./Menu";

export default {
  component: Menu,
  title: "UI/Menu",
  argTypes: {},
};

export const Usage = (args: MenuProps) => (
  <Box css={{ width: "200px" }}>
    <Menu {...args} autoFocus disabledKeys={["edit"]} aria-label="Actions">
      <Menu.Item key="settings" textValue="Settings">
        <Icon icon="GearIcon" css={{ color: "$gray8" }} />
        Settings
      </Menu.Item>
      <Menu.Item key="trash" textValue="Delete">
        <Icon icon="TrashIcon" css={{ color: "$gray8" }} />
        Delete
      </Menu.Item>
      <Menu.Item key="edit" textValue="Edit">
        <Icon icon="Pencil2Icon" css={{ color: "$gray8" }} />
        Edit
      </Menu.Item>
    </Menu>
  </Box>
);

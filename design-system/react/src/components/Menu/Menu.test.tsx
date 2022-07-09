import { render, testA11y, screen } from "@fuel-ui/test-utils";
import React from "react";

import type { MenuProps } from "./Menu";
import { Menu } from "./Menu";

const TestMenu = (props: Omit<MenuProps, "children">) => (
  <Menu autoFocus disabledKeys={["edit"]} aria-label="Actions" {...props}>
    <Menu.Item key="settings" textValue="Settings" aria-label="settings">
      Settings
    </Menu.Item>
    <Menu.Item key="trash" textValue="Delete" aria-label="trash">
      Delete
    </Menu.Item>
    <Menu.Item key="edit" textValue="Edit" aria-label="edit">
      Edit
    </Menu.Item>
  </Menu>
);

describe("Menu", () => {
  it("a11y", async () => {
    await testA11y(<TestMenu />);
  });

  it("should be focused when use autoFocus", async () => {
    render(<TestMenu />);
    expect(screen.getByLabelText("settings")).toHaveFocus();
  });

  it("should dispatch onAction using keyboard command", async () => {
    let item: React.Key = "";
    const { user } = render(
      <TestMenu
        onAction={(key: React.Key) => {
          item = key;
        }}
      />
    );

    await user.press("Enter");
    expect(item).toBe("settings");
  });

  it("should navigate using arrows keys", async () => {
    let item: React.Key = "";
    const { user } = render(
      <TestMenu
        onAction={(key: React.Key) => {
          item = key;
        }}
      />
    );

    await user.press("ArrowDown");
    await user.press("Enter");
    expect(item).toBe("trash");
  });

  it("should not be able to trigger action on disabled keys", async () => {
    let item: React.Key = "";
    const { user } = render(
      <TestMenu
        onAction={(key: React.Key) => {
          item = key;
        }}
      />
    );

    await user.press("ArrowDown");
    await user.press("ArrowDown");
    await user.press("Enter");
    expect(item).toBe("settings");
  });
});

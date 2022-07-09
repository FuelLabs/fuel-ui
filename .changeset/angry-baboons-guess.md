---
"@fuel-ui/react": patch
---

Add `<Menu />` component using React Aria [useMenu()](https://react-spectrum.adobe.com/react-aria/useMenu.html) as base to create it

````jsx
<Menu autoFocus disabledKeys={["edit"]} aria-label="Actions">
  <Menu.Item key="settings" textValue="Settings">
    Settings
  </Menu.Item>
  <Menu.Item key="trash" textValue="Delete">
    Delete
  </Menu.Item>
  <Menu.Item key="edit" textValue="Edit">
    Edit
  </Menu.Item>
</Menu>
````

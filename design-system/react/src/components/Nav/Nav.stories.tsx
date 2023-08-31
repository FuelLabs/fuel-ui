import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'UI/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Usage: Story = {
  render: () => (
    <Nav>
      <Nav.Logo />
      <Nav.Menu>
        <Nav.MenuItem href="#" isActive>
          Developers
        </Nav.MenuItem>
        <Nav.MenuItem href="#">Community</Nav.MenuItem>
        <Nav.MenuItem href="#">Labs</Nav.MenuItem>
      </Nav.Menu>
      <Nav.Spacer />
      <Nav.Menu>
        <Nav.MenuItem href="#">Bridge</Nav.MenuItem>
        <Nav.MenuItem href="#">Explorer</Nav.MenuItem>
        <Nav.MenuItem href="#">Ecosystem</Nav.MenuItem>
      </Nav.Menu>
      <Nav.ThemeToggle />
      {/* <Nav.Network /> */}
      {/* <Nav.Avatar /> */}
    </Nav>
  ),
};

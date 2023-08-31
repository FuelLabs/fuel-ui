import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';

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

const NETWORK = {
  id: '1',
  name: 'Mainnet',
  url: 'https://mainnet.fuel.sh',
};

export const Usage: Story = {
  render: () => (
    <Nav network={NETWORK}>
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
      <Box.HStack gap="$4">
        <Nav.ThemeToggle />
        <Nav.Network />
        {/* <Nav.Avatar /> */}
      </Box.HStack>
    </Nav>
  ),
};

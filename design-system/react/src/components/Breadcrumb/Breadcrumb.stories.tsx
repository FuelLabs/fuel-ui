import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../Icon';

import { Breadcrumb } from './';

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Usage: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item>
        <Icon icon="Home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>Components</Breadcrumb.Item>
      <Breadcrumb.Link href="#">Dropdown</Breadcrumb.Link>
    </Breadcrumb>
  ),
};

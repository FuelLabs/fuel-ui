import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLink } from './ButtonLink';
import type { ButtonLinkProps } from './defs';

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  title: 'UI/ButtonLink',
  argTypes: {
    css: {
      control: false,
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
    onPress: {
      control: false,
    },
    size: {
      defaultValue: 'md',
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Usage: Story = {
  render: (args: ButtonLinkProps) => <ButtonLink {...args}>Link</ButtonLink>,
  args: {
    href: '#',
  },
};

export const External: Story = {
  render: (args: ButtonLinkProps) => <ButtonLink {...args}>Link</ButtonLink>,
  args: {
    href: 'https://fuel.sh/',
    isExternal: true,
  },
};

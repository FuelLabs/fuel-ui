import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';

import { Asset } from './Asset';

const meta: Meta<typeof Asset> = {
  title: 'UI/Asset',
  component: Asset,
};

export default meta;
type Story = StoryObj<typeof Asset>;

const DEFAULT_ARGS = {
  asset: Asset.get('eth'),
  amount: '1000000000',
};

function Full(args: Story['args']) {
  return (
    <Asset {...args} {...DEFAULT_ARGS}>
      <Asset.Icon />
      <Asset.Name />
      <Box.HStack css={{ ml: '$4' }}>
        <Asset.Amount />
        <Asset.Symbol />
      </Box.HStack>
    </Asset>
  );
}

export const Usage: Story = {
  render: (args) => <Full {...args} />,
};

export const IconName: Story = {
  name: 'Icon + Name',
  render: (args) => (
    <Asset {...args} {...DEFAULT_ARGS}>
      <Asset.Icon />
      <Asset.Name />
    </Asset>
  ),
};

export const AmountSymbol: Story = {
  name: 'Amount + Symbol',
  render: (args) => (
    <Asset {...args} {...DEFAULT_ARGS}>
      <Asset.Amount />
      <Asset.Symbol />
    </Asset>
  ),
};

const AMOUNT_ARGS = {
  asset: Asset.get('eth'),
  amount: '1000000001',
  precision: 9,
};
export const AmountExamples: Story = {
  render: (args) => (
    <Box.HStack gap="$8">
      <Asset {...args} {...AMOUNT_ARGS}>
        <Asset.Amount />
        <Asset.Symbol />
      </Asset>
      <Asset {...args} {...AMOUNT_ARGS} negative>
        <Asset.Amount />
        <Asset.Symbol />
      </Asset>
    </Box.HStack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Box.VStack gap="$4">
      <Full {...args} iconSize="sm" />
      <Full {...args} iconSize="md" />
      <Full {...args} iconSize="lg" />
      <Full {...args} iconSize="xl" />
      <Full {...args} iconSize={60} />
    </Box.VStack>
  ),
};

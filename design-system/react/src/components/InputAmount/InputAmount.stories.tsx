/// <reference types="@storybook/types" />
import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { action } from '@storybook/addon-actions';
import type { StoryFn } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Box } from '../Box';
import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { Text } from '../Text';

import { InputAmount } from './InputAmount';

export default {
  component: InputAmount,
  title: 'Form/InputAmount',
  argTypes: {
    hiddenBalance: {
      defaultValue: false,
      control: 'boolean',
    },
    hiddenMaxButton: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

const BALANCE = bn.parseUnits('1.570000044');

const Template: StoryFn<typeof InputAmount> = (args) => {
  const [amount, setAmount] = useState<BN | null>(bn());
  const { units } = args || {};

  const valueOne = bn.parseUnits('1', units).add(11);
  const valueTwo = bn.parseUnits('1', units);

  // Log onChange amount
  useEffect(() => {
    if (amount) {
      action('onChange')(amount.formatUnits());
    }
  }, [amount]);

  return (
    <Box css={{ width: 352 }}>
      <InputAmount {...args} onChange={setAmount} value={amount} />
      <Stack gap="$3">
        <Text fontSize="lg" css={{ marginTop: '$2' }}>
          Amount: {amount?.format({ precision: units, units })}
        </Text>
        <Button onPress={() => setAmount(valueOne)}>
          Set ({valueOne.format({ precision: units, units })})
        </Button>
        <Button onPress={() => setAmount(valueTwo)}>
          Set ({valueTwo.format({ precision: units, units })})
        </Button>
        <Button onPress={() => setAmount(null)}>Clear</Button>
      </Stack>
    </Box>
  );
};

export const Usage = Template.bind({});
Usage.args = {
  balance: BALANCE,
};

export const EthUnits = Template.bind({});
EthUnits.args = {
  balance: bn.parseUnits('1.570000044', 18),
  units: 18,
};

export const NoBalance = Template.bind({});
NoBalance.args = {
  balance: undefined,
};

export const NoAction = Template.bind({});
NoAction.args = {
  hiddenBalance: true,
  hiddenMaxButton: true,
};

export const WithAsset = Template.bind({});
WithAsset.args = {
  balance: BALANCE,
  asset: {
    name: 'ETH',
    imageUrl: './assets/eth.svg',
  },
  onClickAsset: undefined,
};

export const WithAssetTooltip = Template.bind({});
WithAssetTooltip.args = {
  balance: BALANCE,
  asset: {
    name: 'ETH',
    imageUrl: './assets/eth.svg',
  },
  assetTooltip: 'Lorem Ipsum',
  onClickAsset: undefined,
};

export const WithAssetOnClick = Template.bind({});
WithAssetOnClick.args = {
  balance: BALANCE,
  asset: {
    name: 'ETH',
    imageUrl: './assets/eth.svg',
  },
  onClickAsset: () => {},
};

export const Loader = () => (
  <Box css={{ width: 352 }}>
    <InputAmount.Loader isFullWidth={true} />
  </Box>
);

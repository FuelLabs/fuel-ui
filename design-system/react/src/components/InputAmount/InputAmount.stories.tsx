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
  const AMOUNT_VALUE_1 = 1_000_000_011;
  const AMOUNT_VALUE_2 = 1_000_000_000;

  // Log onChange amount
  useEffect(() => {
    if (amount) {
      action('onChange')(amount.formatUnits());
    }
  }, [amount]);

  return (
    <Box css={{ width: 300 }}>
      <InputAmount {...args} onChange={setAmount} value={amount} />
      <Stack gap="$3">
        <Text fontSize="lg" css={{ marginTop: '$2' }}>
          Amount: {amount?.format({ precision: 9 })}
        </Text>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_1))}>
          Set ({bn(AMOUNT_VALUE_1).format({ precision: 9 })})
        </Button>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_2))}>
          Set ({bn(AMOUNT_VALUE_2).format({ precision: 3 })})
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
    assetId:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    name: 'ETH',
    imageUrl: './assets/eth.svg',
  },
};

export const Loader = () => (
  <Box css={{ width: 352 }}>
    <InputAmount.Loader isFullWidth={true} />
  </Box>
);

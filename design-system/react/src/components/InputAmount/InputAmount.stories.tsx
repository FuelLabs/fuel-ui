import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { Text } from '../Text';

import type { InputAmountProps } from './InputAmount';
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

const Template = (args: InputAmountProps) => {
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
      <InputAmount
        {...args}
        balance={bn.parseUnits('1.570000044')}
        onChange={(e) => {
          setAmount(e);
        }}
        value={amount}
      />
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

type TemplateType = typeof Template & {
  args: Pick<InputAmountProps, 'hiddenBalance' | 'hiddenMaxButton'>;
};

export const Usage = Template.bind({});

export const NoAction = Template.bind({}) as TemplateType;

NoAction.args = {
  hiddenBalance: true,
  hiddenMaxButton: true,
};

export const Loader = () => (
  <Box css={{ width: 300 }}>
    <InputAmount.Loader isFullWidth={true} />
  </Box>
);

import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
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
  const AMOUNT_VALUE = 1_000_000_011;

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
        balance={bn.parseUnits('1.57')}
        onChange={(e) => {
          setAmount(e);
        }}
        value={amount}
      />
      <Text fontSize="lg" css={{ marginTop: '$2' }}>
        Amount:{' '}
        {amount?.format({
          precision: 9,
        })}
      </Text>
      <Flex css={{ gap: '$2', marginTop: '$3' }}>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE))}>
          Set (
          {bn(AMOUNT_VALUE).format({
            precision: 9,
          })}
          )
        </Button>
        <Button onPress={() => setAmount(null)}>Clear</Button>
      </Flex>
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

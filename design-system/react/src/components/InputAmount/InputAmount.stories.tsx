import { bn } from '@fuel-ts/math';
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

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
  const [amount, setAmount] = useState(bn());
  const AMOUNT_VALUE = 1_000_000_011;

  // Log onChange amount
  useEffect(() => {
    action('onChange')(amount.formatUnits());
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
      <Button
        css={{ marginTop: '$3' }}
        onPress={() => setAmount(bn(AMOUNT_VALUE))}
      >
        Set amount (
        {bn(AMOUNT_VALUE).format({
          precision: 9,
        })}
        )
      </Button>
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

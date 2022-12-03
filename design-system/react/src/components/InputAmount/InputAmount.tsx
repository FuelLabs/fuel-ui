import { DECIMAL_UNITS } from '@fuel-ts/math';
import type { BN } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Button } from '../Button';
import { Flex } from '../Flex';
import { Input } from '../Input';
import { Text } from '../Text';

import { InputAmountLoader } from './InputAmountLoader';
import { createAmount } from './utils';

export type InputAmountProps = {
  name?: string;
  balance: BN;
  value: BN;
  units?: number;
  onChange: (val: BN) => void;
  hiddenMaxButton?: boolean;
  hiddenBalance?: boolean;
};

type InputAmountComponent = FC<InputAmountProps> & {
  Loader: typeof InputAmountLoader;
};

export const InputAmount: InputAmountComponent = ({
  name,
  balance,
  value,
  units = DECIMAL_UNITS,
  hiddenBalance,
  hiddenMaxButton,
  onChange,
}) => {
  const [assetAmount, setAssetAmount] = useState<string>(
    value.eq(0) ? '' : value.formatUnits(DECIMAL_UNITS)
  );

  useEffect(() => {
    handleAmountChange(value.formatUnits(DECIMAL_UNITS));
  }, [value.toString()]);

  const handleAmountChange = (text: string) => {
    const { text: newText, amount } = createAmount(text);
    const { amount: currentAmount } = createAmount(assetAmount);
    if (!currentAmount.eq(amount)) {
      onChange(amount);
      setAssetAmount(newText);
    }
  };

  const handleSetBalance = () => {
    handleAmountChange(balance.formatUnits(DECIMAL_UNITS));
  };

  return (
    <Input size="lg" css={styles.input} isFullWidth={true}>
      <Input.Number
        autoComplete="off"
        inputMode="decimal"
        name={name}
        aria-label={name}
        placeholder="0.00"
        allowedDecimalSeparators={['.', ',']}
        allowNegative={false}
        thousandSeparator={false}
        value={assetAmount}
        onChange={(e) => handleAmountChange(e.target.value)}
        decimalScale={units}
      />
      <Input.ElementRight>
        <Flex direction="column" align="end" css={styles.flexColumn}>
          <Flex>
            <Button
              aria-label="Max"
              size="xs"
              variant="ghost"
              onPress={handleSetBalance}
              css={styles.maxButton(hiddenMaxButton)}
            >
              Max
            </Button>
          </Flex>
          <Flex>
            <Text css={styles.balance(hiddenBalance)}>
              Balance: {balance.format({ precision: DECIMAL_UNITS })}
            </Text>
          </Flex>
        </Flex>
      </Input.ElementRight>
    </Input>
  );
};

InputAmount.Loader = InputAmountLoader;

const styles = {
  input: cssObj({
    height: 'auto',
    display: 'flex',
    alignItems: 'center',

    input: {
      fontFamily: '$sans',
      fontWeight: '$medium',
    },
  }),
  maxButton: (hiddenMaxButton?: boolean) =>
    cssObj({
      marginTop: '$2',
      marginBottom: '$1',
      height: '$5 !important',
      visibility: hiddenMaxButton ? 'hidden' : 'visible',
    }),
  flexColumn: cssObj({
    marginRight: '$1',
  }),
  balance: (hiddenBalance?: boolean) =>
    cssObj({
      whiteSpace: 'nowrap',
      marginBottom: '$2',
      fontSize: '$xs',
      fontWeight: '$medium',
      color: '$gray10',
      visibility: hiddenBalance ? 'hidden' : 'visible',
    }),
};

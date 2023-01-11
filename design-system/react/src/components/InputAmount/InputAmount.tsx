import type { BN } from '@fuel-ts/math';
import { bn, DECIMAL_UNITS } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Button } from '../Button';
import { Flex } from '../Flex';
import type { InputProps } from '../Input';
import { Input } from '../Input';
import type { InputNumberProps } from '../Input/InputNumber';
import { Text } from '../Text';

import { InputAmountLoader } from './InputAmountLoader';
import { createAmount, formatAmount } from './utils';

export type InputAmountProps = InputProps & {
  name?: string;
  balance?: BN;
  balancePrecision?: number;
  value?: BN | null;
  units?: number;
  onChange?: (val: BN) => void;
  hiddenMaxButton?: boolean;
  hiddenBalance?: boolean;
  inputProps?: InputNumberProps;
  isDisabled?: boolean;
  fee?: BN | null;
};

type InputAmountComponent = FC<InputAmountProps> & {
  Loader: typeof InputAmountLoader;
};

export const InputAmount: InputAmountComponent = ({
  name,
  balance,
  balancePrecision = 3,
  value,
  units = DECIMAL_UNITS,
  hiddenBalance,
  hiddenMaxButton,
  onChange,
  inputProps,
  fee,
  ...props
}) => {
  const [assetAmount, setAssetAmount] = useState<string>(
    !value || value.eq(0) ? '' : formatAmount(value)
  );

  useEffect(() => {
    handleAmountChange(value ? formatAmount(value) : '');
  }, [value?.toString()]);

  const handleAmountChange = (text: string) => {
    const { text: newText, amount } = createAmount(text);
    const { amount: currentAmount } = createAmount(assetAmount);
    if (!currentAmount.eq(amount)) {
      onChange?.(amount);
      setAssetAmount(newText);
    }
  };

  const handleSetBalance = () => {
    if (balance) {
      const next = balance.sub(bn(fee));
      handleAmountChange(formatAmount(next));
    }
  };

  return (
    <Input size="lg" css={styles.input} {...props}>
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
        {...inputProps}
      />
      <Input.ElementRight>
        <Flex direction="column" align="end" css={styles.balanceActions}>
          {balance && (
            <>
              <Flex css={styles.maxButtonContainer}>
                {!hiddenMaxButton && (
                  <Button
                    aria-label="Max"
                    size="xs"
                    variant="ghost"
                    onPress={handleSetBalance}
                    css={styles.maxButton}
                  >
                    Max
                  </Button>
                )}
              </Flex>
              {!hiddenBalance && (
                <Flex>
                  <Text css={styles.balance}>
                    Balance:{' '}
                    {formatAmount(balance, {
                      precision: balance.eq(0) ? 1 : balancePrecision,
                    })}
                  </Text>
                </Flex>
              )}
            </>
          )}
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
  balanceActions: cssObj({
    marginRight: '$1',
    height: '$16',
  }),
  maxButtonContainer: cssObj({
    height: '$8',
  }),
  maxButton: cssObj({
    marginTop: '$2',
    marginBottom: '$1',
    height: '$5 !important',
  }),
  balance: cssObj({
    whiteSpace: 'nowrap',
    marginBottom: '$2',
    fontSize: '$xs',
    fontWeight: '$medium',
    color: '$gray10',
  }),
};

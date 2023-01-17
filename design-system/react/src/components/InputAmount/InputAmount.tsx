import type { BN } from '@fuel-ts/math';
import { bn, DECIMAL_UNITS } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import type { InputProps } from '../Input';
import { Input } from '../Input';
import type { InputNumberProps } from '../Input/InputNumber';
import { Stack } from '../Stack';
import { Tooltip } from '../Tooltip';

import { InputAmountLoader } from './InputAmountLoader';
import { createAmount, formatAmount } from './utils';

export type InputAmountProps = Omit<InputProps, 'size'> & {
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
};

type InputAmountComponent = FC<InputAmountProps> & {
  Loader: typeof InputAmountLoader;
};

export const InputAmount: InputAmountComponent = ({
  name,
  balance: initialBalance,
  balancePrecision = 3,
  value,
  units = DECIMAL_UNITS,
  hiddenBalance,
  hiddenMaxButton,
  onChange,
  inputProps,
  ...props
}) => {
  const [assetAmount, setAssetAmount] = useState<string>(
    !value || value.eq(0) ? '' : formatAmount(value)
  );

  const balance = initialBalance ?? bn(initialBalance);
  const formattedBalance = formatAmount(balance, {
    precision: balance.eq(0) ? 1 : balancePrecision,
  });

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
      handleAmountChange(formatAmount(balance));
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
        onChange={(e) => {
          handleAmountChange(e.target.value);
        }}
        decimalScale={units}
        {...inputProps}
      />
      {initialBalance && (
        <Input.ElementRight>
          <Flex direction="column" align="end" css={styles.balanceActions}>
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
                  <Tooltip content={formatAmount(balance)}>
                    <Stack
                      direction="row"
                      as="div"
                      css={styles.balance}
                      aria-label={`Balance: ${formattedBalance}`}
                    >
                      <Box as="span">Balance: </Box>
                      <Box as="span">{formattedBalance}</Box>
                    </Stack>
                  </Tooltip>
                </Flex>
              )}
            </>
          </Flex>
        </Input.ElementRight>
      )}
    </Input>
  );
};

InputAmount.Loader = InputAmountLoader;

const styles = {
  input: cssObj({
    px: '$3',
    boxSizing: 'border-box',
    height: '$16',
    display: 'grid',
    gridGap: '$2',
    gridTemplateColumns: '1fr auto',

    input: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: '$sans',
      fontWeight: '$medium',
    },

    'input, .fuel_input-element--right': {
      px: '$0',
    },
  }),
  balanceActions: cssObj({
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
    alignItems: 'center',
    whiteSpace: 'nowrap',
    marginBottom: '$2',
    fontSize: '$xs',
    fontWeight: '$medium',
    color: '$gray10',

    '& > span': {
      color: '$gray8',
    },
  }),
};

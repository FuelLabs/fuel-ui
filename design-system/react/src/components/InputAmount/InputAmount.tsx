import type { BN } from '@fuel-ts/math';
import { bn, DECIMAL_UNITS } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import type { Asset } from '@fuel-wallet/types';
import type { PressEvent } from '@react-types/shared';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Image } from '../Image';
import type { InputProps } from '../Input';
import { Input } from '../Input';
import type { InputNumberProps } from '../Input/InputNumber';
import { Text } from '../Text';
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
  asset?: Asset;
  onClickAsset?: (val: PressEvent) => void;
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
  asset,
  onClickAsset,
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

  const tokenImage = (name?: string, imageUrl?: string) => {
    return <Image alt={name} src={imageUrl} width={20} height={20} />;
  };

  return (
    <Input size="lg" css={styles.input} {...props}>
      <Text css={styles.heading}>Amount</Text>
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
        <Input.ElementRight css={styles.elementRight}>
          <Box css={styles.balanceActions}>
            {!hiddenMaxButton && (
              <Flex align="center">
                <Button
                  aria-label="Max"
                  size="sm"
                  variant="ghost"
                  onPress={handleSetBalance}
                  css={styles.maxButton}
                >
                  Max
                </Button>
              </Flex>
            )}
            {asset && onClickAsset && (
              <Button
                size="xs"
                aria-label="Coin Selector"
                css={styles.assetButton}
                onPress={onClickAsset}
              >
                {tokenImage(asset.name, asset.imageUrl)}
                {asset.name}
              </Button>
            )}
          </Box>
        </Input.ElementRight>
      )}
      {!hiddenBalance && (
        <Flex
          as="div"
          css={styles.balance}
          aria-label={`Balance: ${formattedBalance}`}
        >
          <Box as="span">Balance: </Box>
          <Tooltip content={formatAmount(balance)} sideOffset={-5}>
            <Box as="span">{formattedBalance}</Box>
          </Tooltip>
        </Flex>
      )}
    </Input>
  );
};

InputAmount.Loader = InputAmountLoader;

const styles = {
  input: cssObj({
    px: '$3',
    boxSizing: 'border-box',
    height: '$26',
    display: 'grid',
    gridGap: '$2',
    gridTemplateColumns: '1fr auto',

    input: {
      is: ['display'],
      width: '100%',
      boxSizing: 'border-box',
    },

    'input, .fuel_input-element--right': {
      px: '$0',
    },
  }),
  heading: cssObj({
    marginTop: '10px',
    gridArea: '1 / 1 / 1 / 4',
  }),
  maxButtonContainer: cssObj({
    height: '$8',
  }),
  elementRight: cssObj({
    maxHeight: '100%',
  }),
  balanceActions: cssObj({
    display: 'flex',
    justifyContent: 'end',
  }),
  maxButton: cssObj({
    px: '$1',
    width: '$15',
    height: '$5',
  }),
  assetButton: cssObj({
    background: '$blackA12',
    color: '$gray9',
    height: '25px',
    width: '73px',
    marginLeft: '10px',
  }),
  balance: cssObj({
    gridArea: '3 / 1 / 3 / 4',
    gap: '$2',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    fontSize: '$sm',
    fontWeight: '$medium',
    color: '$gray10',

    '& > span:first-of-type': {
      color: '$gray8',
    },
  }),
};

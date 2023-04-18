import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import type { Asset } from '@fuel-wallet/types';
import type { PressEvent } from '@react-types/shared';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Box } from '../Box';
import { Flex } from '../Box/Flex';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Image } from '../Image';
import type { InputProps } from '../Input';
import { Input } from '../Input';
import type { InputNumberProps } from '../Input/InputNumber';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';

import { InputAmountLoader } from './InputAmountLoader';
import { DECIMAL_UNITS, createAmount, formatAmount } from './utils';

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
  const formatOpts = { units };
  const [assetAmount, setAssetAmount] = useState<string>(
    !value || value.eq(0) ? '' : formatAmount(value, formatOpts)
  );

  const balance = initialBalance ?? bn(initialBalance);
  const formattedBalance = formatAmount(balance, {
    precision: balance.eq(0) ? 1 : balancePrecision,
  });

  useEffect(() => {
    handleAmountChange(value ? formatAmount(value, formatOpts) : '');
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
      handleAmountChange(formatAmount(balance, formatOpts));
    }
  };

  const tokenImage = (name?: string, imageUrl?: string) => {
    return (
      <Image
        alt={name}
        src={imageUrl}
        width={14}
        height={14}
        css={styles.image}
      />
    );
  };

  return (
    <Input size="lg" css={styles.input} {...props}>
      <Text css={styles.heading}>Amount</Text>
      <Flex align="center">
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
                  <Icon icon="CaretDown" size="10" />
                </Button>
              )}
            </Box>
          </Input.ElementRight>
        )}
      </Flex>
      {!hiddenBalance && (
        <Flex
          as="div"
          css={styles.balance}
          aria-label={`Balance: ${formattedBalance}`}
        >
          <Box as="span">Balance: </Box>
          <Tooltip content={formatAmount(balance, formatOpts)} sideOffset={-5}>
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
    width: '352px',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',

    input: {
      is: ['display'],
      width: '100%',
      boxSizing: 'border-box',
      fontSize: '$xs',
    },

    'input, .fuel_input-element--right': {
      px: '$0',
    },
  }),
  heading: cssObj({
    marginTop: '$2',
    marginBottom: '$2',
    fontSize: '$xs',
    lineHeight: '$tight',
  }),
  elementRight: cssObj({
    maxHeight: '100%',
    pr: '$0',
  }),
  balanceActions: cssObj({
    display: 'flex',
    justifyContent: 'end',
  }),
  maxButton: cssObj({
    px: '$1',
    width: '24px',
    height: '16px',
    borderRadius: '3px',
    fontSize: '$xs',
  }),
  assetButton: cssObj({
    background: '$blackA12',
    color: '$gray9',
    height: '24px',
    width: '72px',
    marginLeft: '$2',
    borderRadius: '$md',
  }),
  balance: cssObj({
    gap: '$1',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    fontSize: 'xx-small',
    fontWeight: '$medium',
    color: '$gray10',
    lineHeight: '$tight',
    marginTop: '$1',
    marginBottom: '$1',

    '& > span:first-of-type': {
      color: '$muted',
    },
  }),
  image: cssObj({ borderRadius: '50%' }),
};

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
      <Text color="intentsBase9" css={styles.heading}>
        Amount
      </Text>
      <Flex align="center" css={styles.secondRow}>
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
                    variant="solid"
                    intent="primary"
                    onPress={handleSetBalance}
                    css={styles.maxButton}
                  >
                    MAX
                  </Button>
                </Flex>
              )}
              {asset && onClickAsset && (
                <Button
                  size="xs"
                  aria-label="Coin Selector"
                  variant="outlined"
                  intent="base"
                  css={styles.assetButton}
                  onPress={onClickAsset}
                >
                  {tokenImage(asset.name, asset.imageUrl)}
                  <Text fontSize="xs" color="intentsBase12">
                    {asset.name}
                  </Text>
                  <Icon
                    icon="CaretDown"
                    size="10"
                    color="intentsBase12"
                    css={{ color: '$intentsBase12 !important' }}
                  />
                </Button>
              )}
            </Box>
          </Input.ElementRight>
        )}
      </Flex>
      {!hiddenBalance && (
        <Flex
          as="div"
          css={styles.balanceContainer}
          aria-label={`Balance: ${formattedBalance}`}
        >
          <Box as="span" css={styles.balance}>
            Balance:{' '}
          </Box>
          <Tooltip content={formatAmount(balance, formatOpts)} sideOffset={-5}>
            <Box as="span" css={styles.balance}>
              {formattedBalance}
            </Box>
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
    flexWrap: 'wrap',

    input: {
      is: ['display'],
      width: '100%',
      boxSizing: 'border-box',
      fontSize: '$sm',
      fontFamily: '$mono',
    },

    'input, .fuel_input-element--right': {
      px: '$0',
    },
  }),
  heading: cssObj({
    mt: '$3',
    mb: '$1',
    fontSize: '$xs',
    lineHeight: '$tight',
  }),
  secondRow: cssObj({
    width: '100%',
    height: '24px',
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
    fontSize: '8px',
    fontFamily: '$mono',
  }),
  assetButton: cssObj({
    height: '24px',
    width: '72px',
    marginLeft: '$2',
    borderRadius: '$md',
  }),
  balanceContainer: cssObj({
    gap: '$1',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    lineHeight: '$tight',
    fontSize: '8px',
    fontWeight: '$normal',
    mt: '$1',
  }),
  balance: cssObj({
    fontFamily: '$mono',
    color: '$intentsBase9',
  }),
  image: cssObj({ borderRadius: '50%' }),
};

import type { BN } from '@fuel-ts/math';
import { bn, format } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
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
import { DECIMAL_UNITS, createAmount } from './utils';

export type InputAmountProps = Omit<InputProps, 'size'> & {
  name?: string;
  balance?: BN;
  balancePrecision?: number;
  value?: BN | null;
  units?: number;
  onChange?: (val?: BN) => void;
  hiddenMaxButton?: boolean;
  hiddenBalance?: boolean;
  inputProps?: InputNumberProps;
  isDisabled?: boolean;
  asset?: { name?: string; imageUrl?: string };
  assetTooltip?: string;
  onClickAsset?: (e: PressEvent) => void;
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
  assetTooltip,
  onClickAsset,
  ...props
}) => {
  const formatOpts = { units, precision: units };
  const [assetAmount, setAssetAmount] = useState<string>(
    !value || value.eq(0) ? '' : value.format(formatOpts)
  );

  const balance = initialBalance ?? bn(initialBalance);
  const formattedBalance = balance.format({
    ...formatOpts,
    precision: balance.eq(0) ? 1 : balancePrecision,
  });

  useEffect(() => {
    handleAmountChange(value ? value.format(formatOpts) : '');
  }, [value?.toString()]);

  const handleAmountChange = (text: string) => {
    const { text: newText, amount } = createAmount(text, formatOpts.units);
    const { amount: currentAmount } = createAmount(
      assetAmount,
      formatOpts.units
    );
    if (!currentAmount.eq(amount)) {
      onChange?.(newText.length ? amount : undefined);
      setAssetAmount(newText);
    }
  };

  const handleSetBalance = () => {
    if (balance) {
      handleAmountChange(balance.format(formatOpts));
    }
  };

  return (
    <Input size="lg" css={styles.input} {...props}>
      <Text css={styles.heading}>Amount</Text>
      <Flex css={styles.secondRow}>
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
              {asset && (
                <Tooltip content={assetTooltip}>
                  <Button
                    size="sm"
                    aria-label="Coin Selector"
                    variant="outlined"
                    intent="base"
                    onPress={onClickAsset}
                    isDisabled={!onClickAsset}
                    css={styles.assetButton}
                  >
                    <Image
                      alt={asset.name}
                      src={asset.imageUrl}
                      css={styles.image}
                    />
                    <Text css={styles.assetText}>{asset.name}</Text>
                    {!!onClickAsset && (
                      <Icon
                        icon="CaretDown"
                        size={10}
                        css={styles.assetCaret}
                      />
                    )}
                  </Button>
                </Tooltip>
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
          <Tooltip content={format(balance, formatOpts)} sideOffset={-5}>
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
    py: '$4',
    px: '$4',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',

    input: {
      is: ['display'],
      width: '100%',
      boxSizing: 'border-box',
      fontSize: '$md',
      fontFamily: '$mono',
    },

    'input, .fuel_input-element--right': {
      px: '$0',
    },
  }),
  heading: cssObj({
    color: '$intentsBase9',
    mb: '$1',
    fontSize: '$sm',
    lineHeight: '$tight',
  }),
  secondRow: cssObj({
    alignItems: 'center',
    width: '100%',
  }),
  elementRight: cssObj({
    pr: '$0',

    '[aria-disabled="true"]': {
      opacity: 'unset',
      backgroundColor: 'unset',
      color: 'unset',
    },
  }),
  balanceActions: cssObj({
    display: 'flex',
    justifyContent: 'end',
  }),
  maxButton: cssObj({
    px: '$3',
    width: '$8',
    height: '$5',
    borderRadius: '$default',
    fontSize: '$sm',
    fontFamily: '$mono',
  }),
  assetButton: cssObj({
    height: '$6',
    width: '$18',
    marginLeft: '$2',
    borderRadius: '$default',
  }),
  assetText: cssObj({
    fontSize: '$sm',
    color: '$intentsBase12',
  }),
  assetCaret: cssObj({
    color: '$intentsBase12 !important',
  }),
  balanceContainer: cssObj({
    gap: '$1',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    lineHeight: '$tight',
    fontSize: '$sm',
    fontWeight: '$normal',
    mt: '$1',
  }),
  balance: cssObj({
    fontFamily: '$mono',
    color: '$intentsBase9',
  }),
  image: cssObj({
    borderRadius: '50%',
    width: 14,
    height: 14,
  }),
};

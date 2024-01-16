import type { BN } from '@fuel-ts/math';
import { bn, format } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import type { PressEvent } from '@react-types/shared';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Avatar } from '../Avatar';
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
  label?: string;
  balance?: BN;
  units?: number;
  balancePrecision?: number;
  asset?: { name?: string; imageUrl?: string; address?: string };
  assetTooltip?: string;
  hiddenMaxButton?: boolean;
  hiddenBalance?: boolean;
  value?: BN | null;
  onChange?: (val: BN | null) => void;
  onClickAsset?: (e: PressEvent) => void;
  /* Input props */
  inputProps?: InputNumberProps;
};

type InputAmountComponent = FC<InputAmountProps> & {
  Loader: typeof InputAmountLoader;
};

export const InputAmount: InputAmountComponent = ({
  name,
  label,
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
    !value || value.eq(0) ? '' : value.format(formatOpts),
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
      formatOpts.units,
    );
    if (!currentAmount.eq(amount)) {
      onChange?.(newText.length ? amount : null);
      setAssetAmount(newText);
    }
  };

  const handleSetBalance = () => {
    if (balance) {
      handleAmountChange(balance.format(formatOpts));
    }
  };

  const getAssetImage = () => {
    if (asset?.imageUrl) {
      return (
        <Image
          css={styles.image}
          src={asset.imageUrl}
          alt={`${asset.name} image`}
        />
      );
    }

    return (
      <Avatar.Generated
        hash={asset?.address || asset?.name || ''}
        css={styles.image}
        aria-label={`${asset?.name} generated image`}
      />
    );
  };

  return (
    <Input size="lg" css={styles.input} {...props}>
      <Text fontSize="sm" color="textSubtext">
        {label}
      </Text>
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
            <Box.Flex align={'center'} gap={'$2'}>
              {!hiddenMaxButton && (
                <Button
                  aria-label="Max"
                  variant="link"
                  intent="primary"
                  onPress={handleSetBalance}
                  css={styles.maxButton}
                >
                  MAX
                </Button>
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
                    iconSize={20}
                    leftIcon={getAssetImage()}
                    data-dropdown={!!onClickAsset}
                    rightIcon={onClickAsset && <Icon icon="ChevronDown" />}
                  >
                    <Text>{asset.name}</Text>
                  </Button>
                </Tooltip>
              )}
            </Box.Flex>
          </Input.ElementRight>
        )}
      </Flex>
      <Box.Flex gap={'$2'}>
        {!hiddenBalance && (
          <Tooltip content={format(balance, formatOpts)} sideOffset={-5}>
            <Text
              fontSize="sm"
              aria-label={`Balance: ${formattedBalance}`}
              color="textSubtext"
            >
              Balance: {formattedBalance}
            </Text>
          </Tooltip>
        )}
      </Box.Flex>
    </Input>
  );
};

InputAmount.Loader = InputAmountLoader;

const styles = {
  input: cssObj({
    py: '$2',
    px: '$3',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    gap: '$0',

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
    padding: '$1 $2',
    height: 'auto',
    gap: '$1',

    '[data-dropdown="true"]': {
      padding: '$1 $1 $1 $2',
    },
  }),
  balanceContainer: cssObj({
    gap: '$1',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    lineHeight: '$tight',
    fontSize: '$sm',
    fontWeight: '$normal',
  }),
  balanceLabel: cssObj({
    color: '$intentsBase9',
  }),
  balanceValue: cssObj({
    fontFamily: '$mono',
    color: '$intentsBase9',
  }),
  image: cssObj({
    borderRadius: '$full',
    width: '$5',
    height: '$5',
  }),
};

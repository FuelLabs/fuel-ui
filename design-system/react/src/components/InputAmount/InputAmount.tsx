import type { BN } from '@fuel-ts/math';
import { bn, DECIMAL_UNITS } from '@fuel-ts/math';
import { cssObj } from '@fuel-ui/css';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Flex } from '../Flex';
import { Image } from '../Image';
import type { InputProps } from '../Input';
import { Input } from '../Input';
import type { InputNumberProps } from '../Input/InputNumber';
import { Tooltip } from '../Tooltip';

import { InputAmountLoader } from './InputAmountLoader';
import { createAmount, formatAmount } from './utils';

export type AssetInfo = {
  assetName?: string;
  assetId?: string;
  imageUrl?: string;
};

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
  assetInfo?: AssetInfo[];
  onClickAsset?: (val: string) => void;
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
  assetInfo,
  onClickAsset,
  ...props
}) => {
  const [assetAmount, setAssetAmount] = useState<string>(
    !value || value.eq(0) ? '' : formatAmount(value)
  );

  const [assetText, setAssetText] = useState(
    assetInfo && assetInfo.length > 0 ? assetInfo[0].assetName : 'Unknown Asset'
  );

  const [assetImageUrl, setAssetImageUrl] = useState(
    assetInfo && assetInfo.length > 0 ? assetInfo[0].imageUrl : undefined
  );

  const balance = initialBalance ?? bn(initialBalance);
  const formattedBalance = formatAmount(balance, {
    precision: balance.eq(0) ? 1 : balancePrecision,
  });

  useEffect(() => {
    handleAmountChange(value ? formatAmount(value) : '');
  }, [value?.toString()]);

  const handleSelectAsset = (assetIndex: string) => {
    const asset = assetInfo![assetIndex];
    setAssetText(asset.assetName);
    setAssetImageUrl(asset.imageUrl);
    onClickAsset!(assetIndex);
  };

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

  const dropdownItems =
    assetInfo?.map((asset, index) => {
      return (
        <Dropdown.MenuItem key={index}>
          <>
            {tokenImage(asset.assetName, asset.imageUrl)}
            {asset.assetName}
          </>
        </Dropdown.MenuItem>
      );
    }) || [];

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
        <Input.ElementRight css={styles.elementRight}>
          <Box css={styles.balanceActions}>
            <Flex align="end" direction="column">
              {assetInfo && assetInfo.length > 0 && onClickAsset && (
                <Flex>
                  <Dropdown>
                    <Dropdown.Trigger>
                      <Button
                        size="xs"
                        aria-label="Coin Selector"
                        css={{
                          background: '$blackA12',
                          color: '$gray9',
                        }}
                      >
                        {tokenImage(assetText, assetImageUrl)}
                        {assetText}
                      </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Menu
                      onAction={(e) => handleSelectAsset(e.toString())}
                    >
                      {dropdownItems}
                    </Dropdown.Menu>
                  </Dropdown>
                </Flex>
              )}
              <Flex gap="$2" align="center">
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
              </Flex>
            </Flex>
          </Box>
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
      is: ['display'],
      width: '100%',
      boxSizing: 'border-box',
    },

    'input, .fuel_input-element--right': {
      px: '$0',
    },
  }),
  maxButtonContainer: cssObj({
    height: '$8',
  }),
  elementRight: cssObj({
    maxHeight: '100%',
  }),
  balanceActions: cssObj({
    boxSizing: 'border-box',
    display: 'grid',
    justifyContent: 'center',
  }),
  maxButton: cssObj({
    mt: '$1',
    px: '$1',
    width: '$15',
    gridArea: '1 / 1 / 3 / 2',
    height: '$5',
  }),
  balance: cssObj({
    gridArea: '2 / 1 / 3 / 2',
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

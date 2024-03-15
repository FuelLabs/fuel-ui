import { bn } from 'fuels';
import { createContext, useContext } from 'react';
import { useStyles } from '~/hooks';
import { useStrictedChildren } from '~/hooks/useStrictedChildren';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Box } from '../Box';
import { DECIMAL_UNITS } from '../InputAmount/utils';

import { AssetAmount } from './AssetAmount';
import { AssetIcon } from './AssetIcon';
import { AssetName } from './AssetName';
import { AssetSymbol } from './AssetSymbol';
import type { AssetDef, AssetProps } from './defs';
import { styles } from './styles';

type ContextProps = AssetProps & {
  amountStr: string;
  isNegative: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = createContext<ContextProps>({} as any);
export function useAssetProps() {
  return useContext(ctx);
}

const CHILD_ITEMS = [
  'AssetIcon',
  'AssetSymbol',
  'AssetName',
  'AssetAmount',
  'HStack',
  'VStack',
];

export const Asset = _unstable_createComponent<AssetDef>(
  Components.Asset,
  ({
    children,
    gap = '$4',
    iconSize = 'sm',
    units = DECIMAL_UNITS,
    precision = 3,
    negative,
    asset,
    amount,
    hideIcon,
    ...props
  }) => {
    const classes = useStyles(styles, props, ['root']);
    const newChildren = useStrictedChildren('Asset', CHILD_ITEMS, children);
    const amountStr = bn(amount).format({ units, precision });
    const isNegative = negative || bn(amount).lt(0);
    return (
      <ctx.Provider
        value={{
          iconSize,
          asset,
          units,
          precision,
          hideIcon,
          amount,
          amountStr,
          isNegative,
        }}
      >
        <Box.Stack {...props} {...classes.root} direction="row" gap={gap}>
          {newChildren}
        </Box.Stack>
      </ctx.Provider>
    );
  },
);

Asset.Icon = AssetIcon;
Asset.Name = AssetName;
Asset.Symbol = AssetSymbol;
Asset.Amount = AssetAmount;

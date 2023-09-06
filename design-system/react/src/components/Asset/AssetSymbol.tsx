import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { useAssetProps } from './Asset';
import type { AssetSymbolDef } from './defs';
import { styles } from './styles';

const _AssetSymbol = _unstable_createComponent<AssetSymbolDef>(
  Components.AssetSymbol,
  ({ as: Root = 'span', ...props }) => {
    const assetProps = useAssetProps();
    const classes = useStyles(styles, props, ['symbol']);
    return (
      <Root {...classes.symbol} {...props}>
        {assetProps.asset.symbol}
      </Root>
    );
  },
);

export const AssetSymbol =
  createPolymorphicComponent<AssetSymbolDef>(_AssetSymbol);

AssetSymbol.id = 'AssetSymbol';

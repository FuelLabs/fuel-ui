import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { useAssetProps } from './Asset';
import type { AssetNameDef } from './defs';
import { styles } from './styles';

const _AssetName = _unstable_createComponent<AssetNameDef>(
  Components.AssetName,
  ({ as: Root = 'span', ...props }) => {
    const assetProps = useAssetProps();
    const classes = useStyles(styles, props, ['name']);
    return (
      <Root {...classes.name} {...props}>
        {assetProps.asset.name}
      </Root>
    );
  },
);

export const AssetName = createPolymorphicComponent<AssetNameDef>(_AssetName);

AssetName.id = 'AssetName';

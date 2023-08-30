import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { SIZES_MAP } from '../Avatar/styles';

import { useAssetProps } from './Asset';
import type { AssetIconDef } from './defs';
import { styles } from './styles';

const _AssetIcon = _unstable_createComponent<AssetIconDef>(
  Components.AssetIcon,
  ({ as: Root = 'img', ...props }) => {
    const { asset, iconSize = 'md' } = useAssetProps();
    const classes = useStyles(styles, props, ['icon']);
    const size = typeof iconSize === 'string' ? SIZES_MAP[iconSize] : iconSize;
    return (
      <Root
        {...classes.icon}
        src={asset.imageUrl}
        alt={`${asset.name} image`}
        {...props}
        width={size}
        height={size}
      />
    );
  },
);

export const AssetIcon = createPolymorphicComponent<AssetIconDef>(_AssetIcon);

AssetIcon.id = 'AssetIcon';

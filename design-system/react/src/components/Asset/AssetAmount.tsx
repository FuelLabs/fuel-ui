import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Text } from '../Text';

import { useAssetProps } from './Asset';
import type { AssetAmountDef } from './defs';
import { styles } from './styles';

const _AssetAmount = _unstable_createComponent<AssetAmountDef>(
  Components.AssetAmount,
  (props) => {
    const { hideIcon, amountStr, isNegative } = useAssetProps();
    const classes = useStyles(styles, props, ['amount']);
    return (
      <Text
        {...props}
        {...classes.amount}
        iconColor={isNegative ? 'intentsError9' : 'brand'}
        {...(!hideIcon && {
          leftIcon: isNegative ? 'ArrowDown' : 'ArrowUp',
        })}
      >
        {amountStr}
      </Text>
    );
  },
);

export const AssetAmount =
  createPolymorphicComponent<AssetAmountDef>(_AssetAmount);

AssetAmount.id = 'AssetAmount';

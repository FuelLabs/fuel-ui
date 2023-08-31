import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Asset, {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  icon: {},
  name: {},
  symbol: {},
  amount: {},
});

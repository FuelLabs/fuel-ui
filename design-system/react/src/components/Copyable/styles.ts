import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Copyable, {
  root: {
    display: 'inline-flex',
  },
  icon: {
    py: '$3',
    px: '$0',
    height: '$4',
    color: '$textIcon',
  },
});

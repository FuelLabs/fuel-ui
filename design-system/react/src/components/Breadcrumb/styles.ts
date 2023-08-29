import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Breadcrumb, {
  root: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
  },
  link: {},
});

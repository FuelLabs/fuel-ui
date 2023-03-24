import { createStyle } from '~/hooks';
import { Components } from '~/types';

export const styles = createStyle(Components.Box, {
  root: {
    fontFamily: '$sans',
  },
  centered: {
    is: ['centered'],
    '&[data-min-ws]': {
      minW: '$screenW',
    },
    '&[data-min-hs]': {
      minH: '$screenH',
    },
  },
  flex: {
    display: 'flex',
  },
  stack: {
    display: 'flex',
    gap: '$2',
    flexDirection: 'column',
  },
});

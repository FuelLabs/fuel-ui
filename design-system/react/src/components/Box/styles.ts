import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Box, {
  root: {
    fontFamily: '$sans',
  },
  flex: {},
  stack: {},
  hstack: {},
  vstack: {},
  centered: {
    is: ['centered'],

    '&[data-min-ws]': {
      minW: '$screenW',
    },
    '&[data-min-hs]': {
      minH: '$screenH',
    },
  },
  container: {
    margin: '0 auto',

    variants: {
      size: {
        sm: {
          px: '$10',
          w: '$xl',
        },
        md: {
          px: '$14',
          w: '$2xl',
        },
        lg: {
          px: '$14',
          w: '$4xl',
        },
        xl: {
          px: '$14',
          w: '$6xl',
        },
      },
    },

    defaultVariants: {
      size: 'lg',
    },
  },
});

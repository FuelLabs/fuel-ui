import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const containerStyle = {
  margin: '0 auto',

  variants: {
    size: {
      sm: {
        px: '$10',
        maxW: '$xl',
      },
      md: {
        px: '$14',
        maxW: '$2xl',
      },
      lg: {
        px: '$14',
        maxW: '$4xl',
      },
      xl: {
        px: '$14',
        maxW: '$6xl',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
};

export const styles = createStyle(Components.Box, {
  root: {
    fontFamily: '$sans',
  },
  flex: {
    display: 'flex',
  },
  stack: {
    display: 'flex',
    gap: '$2',
    flexDirection: 'column',
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
  container: containerStyle,
});

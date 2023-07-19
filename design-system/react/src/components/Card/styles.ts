import { Components } from '~/defs';
import { createStyle } from '~/hooks';

export const styles = createStyle(Components.Card, {
  root: {
    layer: 'layer-card',

    variants: {
      variant: {
        outlined: {
          background: 'transparent',
          border: '1px solid $border',
        },
      },
    },
    defaultVariants: {
      variant: 'ghost',
    },
  },
  body: {
    px: '$4',
    py: '$4',
  },
  footer: {
    px: '$4',
    pb: '$4',
    pt: '$4',
    borderTop: '1px solid $border',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '$3',
  },
  header: {
    px: '$4',
    py: '$4',
    borderBottom: '1px solid $border',

    '& .fuel_Heading': {
      margin: 0,
    },

    '&[data-space=compact]': {
      py: '$2',
      fontSize: '$sm',
    },
  },
});

import * as variants from './variants';

import { createStyle } from '~/hooks';
import { Components } from '~/types';

export const styles = createStyle(Components.Badge, {
  root: {
    is: ['display'],
    border: 'none',
    transition: 'all',
    textDecoration: 'none',
    py: '2px',
    px: '$2',
    borderRadius: '$default',
    textTransform: 'uppercase',

    variants: {
      color: variants.colors.solid,

      variant: {
        solid: {},
        outlined: {},
        ghost: {},
      },
    },

    compoundVariants: [
      /**
       * Variants imported from button variants
       */
      ...variants.colors.outlined,
      ...variants.colors.ghost,
    ],

    defaultVariants: {
      color: 'accent',
      variant: 'ghost',
    },
  },
});

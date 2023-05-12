import * as buttonVariants from '../Button/variants';

import { Components } from '~/defs';
import { createStyle } from '~/hooks';

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
      intent: buttonVariants.intents.solid,

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
      ...buttonVariants.intents.solid,
      ...buttonVariants.intents.outlined,
      ...buttonVariants.intents.ghost,
    ],

    defaultVariants: {
      intent: 'base',
      variant: 'ghost',
    },
  },
});

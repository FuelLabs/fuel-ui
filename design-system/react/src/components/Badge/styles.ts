import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

import * as buttonVariants from '../Button/variants';

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
      variant: 'solid',
    },
  },
});

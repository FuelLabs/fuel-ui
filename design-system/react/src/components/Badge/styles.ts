import { css } from '@test-changesets/css';

import * as variants from './variants';

export const badge = css({
  border: 'none',
  transition: 'all',
  textDecoration: 'none',
  py: '2px',
  px: '$2',
  borderRadius: '$md',
  textTransform: 'uppercase',
  fontWeight: '$semibold',

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
});

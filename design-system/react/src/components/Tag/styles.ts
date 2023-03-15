import { css } from '@fuel-ui/css';

import * as variants from './variants';

export const tag = css({
  is: ['display'],
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  transition: 'all',
  textDecoration: 'none',

  '& button': {
    px: '$0',
    color: 'inherit',
    opacity: '.6',

    '&:hover': {
      opacity: 1,
    },
  },

  variants: {
    size: variants.size,
    color: variants.colors.solid,

    variant: {
      solid: {},
      outlined: {},
      ghost: {},
    },

    disabled: {
      true: {
        opacity: '0.6',
        cursor: 'default',
      },
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
    size: 'sm',
    color: 'accent',
    variant: 'solid',
  },
});

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

    intent: {
      primary: {},
      base: {},
      info: {},
      warning: {},
      success: {},
      error: {},
    },

    variant: {
      solid: {},
      ghost: {},
      outlined: {},
      link: {},
    },
  },

  compoundVariants: [
    /**
     * Variants imported from button variants
     */
    ...variants.intents.solid,
    ...variants.intents.ghost,
    ...variants.intents.outlined,
    ...variants.intents.link,
  ],

  defaultVariants: {
    size: 'sm',
    intent: 'base',
    variant: 'solid',
  },
});

import { createStyle } from '../../hooks/useStore';

import * as variants from './variants';

import { Components } from '~/types';

export const styles = createStyle(Components.Button, {
  root: {
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid transparent',
    borderRadius: '$lg',
    transition: 'all',
    textDecoration: 'none',
    fontFamily: '$sans',

    '&:not([aria-disabled=true]):active, &:not([aria-disabled=true])[aria-pressed=true]':
      {
        transform: 'scale(0.96)',
      },

    variants: {
      size: variants.size,
      color: variants.colors.solid,

      variant: {
        solid: {},
        outlined: {},
        ghost: {},
        link: {},
      },

      disabled: {
        true: {
          opacity: '0.6',
          cursor: 'default',
        },
      },

      justIcon: {
        true: {
          minW: 'auto',
        },
      },

      isLink: {
        true: {
          textDecoration: 'none',
          background: 'red',
        },
      },
    },

    compoundVariants: [
      ...variants.colors.outlined,
      ...variants.colors.ghost,
      ...variants.colors.link,

      /**
       * Sizes when with just icon prop
       */
      {
        size: 'xs',
        justIcon: true,
        css: { px: '$1' },
      },
      {
        size: 'sm',
        justIcon: true,
        css: { px: '$2' },
      },
      {
        size: 'md',
        justIcon: true,
        css: { px: '$3' },
      },
      {
        size: 'lg',
        justIcon: true,
        css: { px: '$4' },
      },
    ],

    defaultVariants: {
      size: 'md',
      color: 'accent',
      variant: 'solid',
      isLink: false,
    },
  },
  iconLeft: {
    //
  },
  iconRight: {
    //
  },
});

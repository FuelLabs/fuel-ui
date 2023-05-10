import { createStyle } from '../../hooks/useStore';

import * as variants from './variants';

import { Components } from '~/defs';

export const styles = createStyle(Components.Button, {
  root: {
    is: ['display', 'centered'],
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    border: '1px solid transparent',
    borderRadius: '$default',
    transition: 'all',
    textDecoration: 'none',

    '&:not([aria-disabled=true]):active, &:not([aria-disabled=true])[aria-pressed=true]':
      {
        transform: 'scale(0.97)',
      },

    variants: {
      size: variants.size,
      intent: {
        primary: {},
        base: {},
        info: {},
        warning: {},
        error: {},
      },

      variant: {
        solid: {},
        outlined: {},
        ghost: {},
        link: {},
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
      ...variants.intents.solid,
      ...variants.intents.outlined,
      ...variants.intents.ghost,
      ...variants.intents.link,

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

      {
        justIcon: true,
        variant: 'link',
        css: {
          padding: '$0',
        },
      },
    ],

    defaultVariants: {
      size: 'md',
      intent: 'primary',
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

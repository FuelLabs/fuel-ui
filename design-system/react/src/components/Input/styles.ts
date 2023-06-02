import { css } from '@fuel-ui/css';

export const input = css({
  is: ['display'],
  layer: 'input-base',
  display: 'inline-flex',
  boxSizing: 'content-box',
  borderRadius: '$default',
  overflow: 'hidden',

  '& > input': {
    border: 'none',
  },

  '& button:not([aria-disabled=true]):focus-visible': {
    outlineColor: '$border',
  },

  variants: {
    size: {
      sm: {
        textSize: 'sm',
        height: '$9',

        '& > input': {
          px: '$2',
          textSize: 'sm',
          height: '100%',
        },
      },
      md: {
        textSize: 'base',
        height: '$11',

        '& > input': {
          px: '$3',
          textSize: 'base',
          height: '100%',
        },
      },
      lg: {
        textSize: 'lg',
        height: '$12',

        '& > input': {
          px: '$3',
          textSize: 'lg',
          height: '100%',
        },
      },
    },

    full: {
      true: {
        width: '$full',
      },
    },

    disabled: {
      true: {
        layer: 'input-disabled',
      },
    },

    invalid: {
      true: {
        layer: 'input-error',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const field = css({
  is: ['noAppearance', 'display'],
  outline: 'none',
  p: '$0',
  flex: 1,
  fontWeight: '$normal',
  color: '$inputBaseColor',
});

const elementDefinitions = {
  display: 'inline-flex',
  alignItems: 'center',

  '& > button': {
    height: 'calc(100% - 30%)',
  },

  variants: {
    size: {
      sm: {
        px: '$2',
      },
      md: {
        px: '$3',
      },
      lg: {
        px: '$3',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
};

export const element = css({
  ...elementDefinitions,

  '&[class*="Left"]': {
    pr: 0,
  },

  '&[class*="Right"]': {
    pl: 0,
  },
});

export const addon = css({
  ...elementDefinitions,
  color: '$inputBaseIcon',
  fontWeight: '$normal',

  '&[class*="Left"]': {
    pr: '$0',
  },

  '&[class*="Right"]': {
    pl: '$0',
  },
});

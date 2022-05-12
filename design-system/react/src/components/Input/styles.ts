import { css } from '@fuel/css';

const BG_COLOR = '$gray1';
const TEXT_COLOR = '$gray8';
const PLACEHOLDER_COLOR = '$gray10';
const OUTLINE_COLOR = '$gray3';
const INPUT_COLOR = '$gray11';
const ADDON_COLOR = '$gray9';
const ADDON_BG_COLOR = '$gray4';

export const input = css({
  display: 'inline-flex',
  background: BG_COLOR,
  border: `1px solid $borderColor`,
  fontFamily: '$sans',
  color: TEXT_COLOR,
  boxSizing: 'content-box',
  borderRadius: '$md',
  overflow: 'hidden',

  '&:focus-within': {
    outline: `3px solid ${OUTLINE_COLOR}`,
  },
  '&[aria-disabled=true]:focus-within': {
    outline: 'none',
  },

  '& > input': {
    border: 'none',
  },

  variants: {
    size: {
      sm: {
        textSize: 'sm',
        height: '$9',

        '& > input': {
          px: '$3',
          textSize: 'sm',
          height: '100%',
        },
      },
      md: {
        textSize: 'base',
        height: '$11',

        '& > input': {
          px: '$4',
          textSize: 'base',
          height: '100%',
        },
      },
      lg: {
        textSize: 'lg',
        height: '$12',

        '& > input': {
          px: '$4',
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
        opacity: '0.5',
        cursor: 'default',
      },
    },

    invalid: {
      true: {
        color: '$red8',
        borderColor: '$red5',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const field = css({
  is: ['noAppearance'],
  outline: 'none',
  p: '$0',
  flex: 1,
  color: INPUT_COLOR,

  '&::placeholder': {
    color: PLACEHOLDER_COLOR,
  },
  '&::-ms-input-placeholder': {
    color: PLACEHOLDER_COLOR,
  },
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
        px: '$3',
      },
      md: {
        px: '$4',
      },
      lg: {
        px: '$4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
};

export const element = css({
  ...elementDefinitions,

  '&[class*="left"]': {
    pr: 0,
  },

  '&[class*="right"]': {
    pl: 0,
  },
});
export const addon = css({
  ...elementDefinitions,
  background: ADDON_BG_COLOR,
  color: ADDON_COLOR,

  '&[class*="left"]': {
    borderRight: `1px solid $borderColor`,
  },

  '&[class*="right"]': {
    borderLeft: `1px solid $borderColor`,
  },
});

import { css } from '@fuel-ui/css';

const BG_COLOR = '$inputBg';
const INPUT_COLOR = '$inputColor';
const BORDER_COLOR = '$inputBorder';
const PLACEHOLDER_COLOR = '$inputPlaceholderColor';
const ADDON_COLOR = '$gray7';

export const input = css({
  is: ['display'],
  display: 'inline-flex',
  background: BG_COLOR,
  border: `1px solid ${BORDER_COLOR}`,
  color: ADDON_COLOR,
  boxSizing: 'content-box',
  borderRadius: '$default',
  overflow: 'hidden',

  [`&:focus-within`]: {
    borderColor: '$gray6',
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
  is: ['noAppearance', 'display'],
  outline: 'none',
  p: '$0',
  flex: 1,
  color: INPUT_COLOR,
  fontWeight: '$normal',

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
  color: ADDON_COLOR,
  fontWeight: '$semibold',

  '&[class*="Left"]': {
    pr: '$0',
  },

  '&[class*="Right"]': {
    pl: '$0',
  },
});

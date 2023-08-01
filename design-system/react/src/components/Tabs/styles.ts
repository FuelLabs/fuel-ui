import { css } from '@fuel-ui/css';

const OUTLINE_COLOR = '$intentsBase6';
const BORDER_RADIUS = '$default';
const HIGHLIGHT_COLOR = '$brand';

export const root = css({
  display: 'flex',
  flexDirection: 'column',
});

export const list = css({
  flexShrink: 0,
  display: 'flex',

  variants: {
    variant: {
      link: {
        gap: '$4',
        mx: '$1',
        mb: '$6',
      },
      subtle: {
        mb: '$4',
        gap: '$2',
        padding: '$2',
        background: '$cardBg',
        borderRadius: '$default',
      },
    },
  },
  defaultVariants: {
    variant: 'link',
  },
});

export const trigger = css({
  all: 'unset',
  position: 'relative',
  height: '$9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      link: {
        textSize: 'xl',
        color: '$textColor',
        userSelect: 'none',

        '&:after': {
          position: 'absolute',
          display: 'none',
          content: '""',
          bottom: '-3px',
          left: 0,
          w: 'calc($full + 4px)',
          height: '2px',
          background: 'transparent',
          transform: 'translateX(-2px)',
        },
        '&:hover': {
          color: HIGHLIGHT_COLOR,
          cursor: 'pointer',
        },
        '&[data-state="active"]': {
          color: '$intentsBase12',
          borderBottomColor: HIGHLIGHT_COLOR,

          '&:after': {
            display: 'block',
            background: HIGHLIGHT_COLOR,
          },
        },
        '&:focus-visible': {
          borderColor: OUTLINE_COLOR,
        },
      },
      subtle: {
        flex: 1,
        background: 'transparent',
        borderRadius: '$default',
        userSelect: 'none',
        transitionProperty: 'background, color',
        transitionDuration: '0.3ms',
        border: '1px solid transparent',

        '&[data-state="active"]': {
          color: '$textInverse',
          background: '$bodyBg',
          borderColor: '$border',
        },
        '&:hover': {
          color: '$textInverse',
          cursor: 'pointer',
        },
        '&:focus-visible': {
          outline: '2px solid $intentsBase3',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'link',
  },
});

export const content = css({
  flexGrow: 1,
  borderBottomLeftRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  outline: 'none',

  '&:focus-visible': {
    borderColor: OUTLINE_COLOR,
  },
});

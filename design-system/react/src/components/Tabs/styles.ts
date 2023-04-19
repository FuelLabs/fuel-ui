import { css } from '@fuel-ui/css';

const OUTLINE_COLOR = '$intentsBase4';
const BORDER_RADIUS = '$default';
const HIGHLIGHT_COLOR = '$brand';

export const root = css({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: BORDER_RADIUS,
  background: '$cardBg',
});

export const list = css({
  flexShrink: 0,
  display: 'flex',
  px: '$1',
  mb: '$4',
});

export const trigger = css({
  all: 'unset',
  position: 'relative',
  height: '$9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textSize: 'xl',
  color: '$textColor',
  userSelect: 'none',
  fontFamily: '$mono',
  letterSpacing: '-0.08em',

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

  '& ~ &': {
    ml: '$5',
  },

  '&:first-child': {
    borderTopLeftRadius: BORDER_RADIUS,
  },
  '&:last-child': {
    borderTopRightRadius: BORDER_RADIUS,
  },
  '&:hover': {
    color: HIGHLIGHT_COLOR,
    cursor: 'pointer',
  },
  '&[data-state="active"]': {
    color: '$gray12',
    borderBottomColor: HIGHLIGHT_COLOR,

    '&:after': {
      display: 'block',
      background: HIGHLIGHT_COLOR,
    },
  },
  '&:focus-visible': {
    borderColor: OUTLINE_COLOR,
  },
});

export const content = css({
  mt: '$2',
  flexGrow: 1,
  borderBottomLeftRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  outline: 'none',

  '&:focus-visible': {
    borderColor: OUTLINE_COLOR,
  },
});

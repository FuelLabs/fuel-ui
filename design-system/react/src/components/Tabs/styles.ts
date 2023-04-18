import { css } from '@fuel-ui/css';

const OUTLINE_COLOR = '$gray4';
const BORDER_RADIUS = '$default';
const HIGHLIGHT_COLOR = '$accent11';

export const root = css({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '$sm',
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
  is: ['display'],
  all: 'unset',
  position: 'relative',
  height: '$9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
    color: HIGHLIGHT_COLOR,
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

import { css } from '@test-changesets/css';

const OUTLINE_COLOR = '$gray4';
const BORDER_RADIUS = '$md';
const HIGHLIGHT_COLOR = '$accent9';

export const root = css({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '$sm',
  borderRadius: BORDER_RADIUS,
  background: '$gray1',
});

export const list = css({
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $borderColor`,
});

export const trigger = css({
  all: 'unset',
  position: 'relative',
  fontFamily: 'inherit',
  px: '$5',
  height: '$12',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textSize: 'base',
  color: '$textColor',
  userSelect: 'none',
  border: '2px solid transparent',

  '&:after': {
    position: 'absolute',
    display: 'none',
    content: '""',
    bottom: '-3px',
    left: 0,
    w: 'calc($full + 4px)',
    height: '3px',
    background: 'transparent',
    transform: 'translateX(-2px)',
  },

  '&:first-child': {
    borderTopLeftRadius: BORDER_RADIUS,
  },
  '&:last-child': {
    borderTopRightRadius: BORDER_RADIUS,
  },
  '&:hover': {
    color: HIGHLIGHT_COLOR,
  },
  '&[data-state="active"]': {
    color: HIGHLIGHT_COLOR,
    borderBottomColor: HIGHLIGHT_COLOR,

    '&:after': {
      display: 'block',
      background: HIGHLIGHT_COLOR,
    },
  },
  '&:focus': {
    borderColor: OUTLINE_COLOR,
  },
});

export const content = css({
  flexGrow: 1,
  borderBottomLeftRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  outline: 'none',
  border: '2px solid transparent',

  '&:focus': {
    borderColor: OUTLINE_COLOR,
  },
});

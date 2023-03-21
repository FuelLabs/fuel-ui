import { css, darkTheme } from '@fuel-ui/css';

export const root = css({
  all: 'unset',
  cursor: 'pointer',
  position: 'relative',
  backgroundColor: '$inputBg',
  width: '$6',
  height: '$6',
  borderRadius: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$sm',
  fontSize: '$base',

  [`.${darkTheme} &`]: {
    background: '$inputBg',
  },

  '&:after': {
    position: 'absolute',
    display: 'block',
    content: '""',
    top: 0,
    left: 0,
    w: 'calc(100%)',
    height: 'calc(100%)',
    background: 'transparent',
    borderRadius: 'calc($md + 4px)',
    transform: 'translate(-2px, -2px)',
  },

  '&:focus-within': {
    borderColor: '$gray5',

    '&:after': {
      border: '2px solid $accent5',
    },
  },

  '&[aria-disabled=true]': {
    opacity: '0.5',
    cursor: 'default',
  },
});

export const indicator = css({
  is: ['centered'],
  color: '$accent11',

  variants: {
    disabled: {
      true: {
        color: '$gray10',
      },
    },
  },
});

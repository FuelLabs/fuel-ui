import { css } from '@fuel/css';

export const root = css({
  all: 'unset',
  position: 'relative',
  backgroundColor: '$gray1',
  width: '$7',
  height: '$7',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$sm',

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
      border: '2px solid $accent4',
    },
  },

  variants: {
    disabled: {
      true: {
        opacity: '0.5',
      },
    },
  },
});

export const indicator = css({
  is: ['centered'],
  color: '$accent9',

  variants: {
    disabled: {
      true: {
        color: '$gray10',
      },
    },
  },
});

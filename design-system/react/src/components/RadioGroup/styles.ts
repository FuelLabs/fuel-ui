import { css } from '@fuel-ui/css';

import { darkTheme } from '~/hooks';

export const root = css({
  display: 'flex',

  '& label': {
    fontSize: '$base',
  },

  variants: {
    disabled: {
      true: {
        opacity: '0.5',
      },
    },
  },
});

export const item = css({
  all: 'unset',
  position: 'relative',
  cursor: 'pointer',
  backgroundColor: '$inputBg',
  width: '$6',
  height: '$6',
  borderRadius: '100%',
  boxShadow: '$sm',

  [`.${darkTheme} &`]: {
    background: '$gray2',
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
    borderRadius: '100%',
    transform: 'translate(-2px, -2px)',
  },

  '&:focus-visible': {
    borderColor: '$gray5',

    '&:after': {
      border: '2px solid $accent5',
    },
  },

  '&[aria-disabled=true]': {
    cursor: 'default',
    opacity: '0.5',
  },
});

export const indicator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    backgroundColor: '$accent11',
  },

  variants: {
    disabled: {
      true: {
        '&:after': {
          background: '$gray10',
        },
      },
    },
  },
});

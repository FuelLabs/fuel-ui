import { css } from '@fuel-ui/css';

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
  layer: 'input-base',
  position: 'relative',
  cursor: 'pointer',
  width: '$6',
  height: '$6',
  borderRadius: '100%',

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
    borderColor: '$intentsBase5',

    '&:after': {
      border: '2px solid $intentsPrimary5',
    },
  },

  '& .fuel_Icon': {
    color: 'inherit',
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
    backgroundColor: '$brand',
  },

  variants: {
    disabled: {
      true: {
        '&:after': {
          background: '$intentsBase10',
        },
      },
    },
  },
});

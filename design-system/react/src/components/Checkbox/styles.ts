import { css } from '@fuel-ui/css';

export const root = css({
  all: 'unset',
  layer: 'input-base',
  cursor: 'pointer',
  position: 'relative',
  width: '$6',
  height: '$6',
  borderRadius: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$base',

  '&:after': {
    position: 'absolute',
    display: 'block',
    content: '""',
    top: 0,
    left: 0,
    w: 'calc(100%)',
    height: 'calc(100%)',
    background: 'transparent',
    borderRadius: '$default',
    transform: 'translate(-2px, -2px)',
  },

  '&:focus-within': {
    borderColor: '$intentsBase4',

    '&:after': {
      border: '2px solid $intentsBase4',
    },
  },

  '& .fuel_Icon': {
    color: 'inherit',
  },

  '&[aria-disabled=true]': {
    opacity: '0.5',
    cursor: 'default',
  },
});

export const indicator = css({
  is: ['centered'],
  color: '$brand',

  variants: {
    disabled: {
      true: {
        color: '$intentsBase10',
      },
    },
  },
});

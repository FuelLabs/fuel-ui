import { css } from '@fuel-ui/css';

export const menu = css({
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$default',

  '&:focus-visible': {
    outline: '2px solid $gray5',
  },
});

export const item = css({
  is: ['display'],
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  height: '$9',
  px: '$4',
  opacity: 0.4,
  borderRadius: '$default',
  color: '$gray10',
  fontWeight: '$medium',

  '&:not([aria-disabled="true"])': {
    cursor: 'pointer',
    opacity: 1,
  },

  '&:focus-visible, &:not([aria-disabled="true"]):hover': {
    color: '$gray12',
    background: '$whiteA5',
    outline: 'none',
  },

  [`&:focus-visible .fuel_icon`]: {
    color: '$accent11',
  },
});

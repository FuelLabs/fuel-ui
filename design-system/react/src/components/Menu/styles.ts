import { css } from '@fuel-ui/css';

export const menu = css({
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$md',

  '&:focus': {
    outline: '2px solid $gray5',
  },
});

export const item = css({
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  height: '$9',
  px: '$4',
  opacity: 0.4,
  borderRadius: '$md',
  color: '$gray10',
  fontWeight: '$medium',

  '&:not([aria-disabled="true"])': {
    cursor: 'pointer',
    opacity: 1,
  },

  '&:focus': {
    color: '$gray12',
    background: '$gray1',
    outline: 'none',
  },

  [`&:focus .fuel_icon`]: {
    color: '$accent11',
  },
});

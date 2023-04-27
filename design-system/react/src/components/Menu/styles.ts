import { css } from '@fuel-ui/css';

export const menu = css({
  layer: 'layer-card',
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$default',
  minWidth: '160px',

  '&:focus-visible': {
    outline: '2px solid $intentsBase5',
  },
});

export const item = css({
  is: ['display'],
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  height: '$9',
  px: '$3',
  opacity: 0.4,
  color: '$intentsBase10',
  fontWeight: 'normal',

  '.fuel_Icon': {
    color: '$textIcon',
  },

  '&:not([aria-disabled="true"])': {
    cursor: 'pointer',
    opacity: 1,
  },

  '&:focus-visible, &:not([aria-disabled="true"]):hover': {
    color: '$intentsBase12',
    background: '$intentsBase2',
    outline: 'none',
  },

  [`&:focus-visible .fuel_Icon`]: {
    color: '$brand',
  },
});

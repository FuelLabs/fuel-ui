import { css } from '@fuel-ui/css';

export const menu = css({
  layer: 'layer-overlay',
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$default',
  minWidth: '160px',
  background: 'transparent',
});

export const item = css({
  is: ['display'],
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  px: '$3',
  minHeight: '$9',
  fontWeight: 'normal',

  '&:not([aria-disabled="true"])': {
    cursor: 'pointer',
    opacity: 1,
  },

  '&:focus-visible, &:not([aria-disabled="true"]):hover': {
    color: '$semanticGhostBaseColor',
    background: '$inverseA3',
    outline: 'none',
  },

  [`&:focus-visible .fuel_Icon`]: {
    color: '$brand',
  },

  '&[aria-disabled="true"]': {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
});

import { css } from '@fuel-ui/css';

export const menu = css({
  layer: 'layer-card',
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$default',
  minWidth: '160px',
});

export const item = css({
  is: ['display'],
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  height: '$9',
  px: '$3',
  fontWeight: 'normal',

  '&, & .fuel_Icon': {
    color: '$semanticGhostBaseColor',
  },

  '&:not([aria-disabled="true"])': {
    cursor: 'pointer',
    opacity: 1,
  },

  '&:focus-visible, &:not([aria-disabled="true"]):hover': {
    color: '$semanticGhostBaseColor',
    background: '$semanticGhostBaseBg',
    outline: 'none',
  },

  [`&:focus-visible .fuel_Icon`]: {
    color: '$brand',
  },

  '&[aria-disabled="true"]': {
    cursor: 'not-allowed',

    '&, & .fuel_Icon': {
      color: '$semanticGhostBaseDisabledColor',
    },
  },
});

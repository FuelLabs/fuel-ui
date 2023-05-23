import { css } from '@fuel-ui/css';

export const menu = css({
  layer: 'layer-card',
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$default',
  minWidth: '160px',

  '&[data-overlay="true"]': {
    '& .fuel_MenuListItem:not([data-focused="true"]), & .fuel_MenuListItem:not([data-focused="true"]) .fuel_Icon':
      {
        color: '$bodyBg',
      },
  },
});

export const item = css({
  is: ['display'],
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  minHeight: '$9',
  px: '$3',
  fontWeight: 'normal',

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
    opacity: '0.5',
  },
});

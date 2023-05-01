import { css } from '@fuel-ui/css';

export const card = css({
  layer: 'layer-card',
  p: '$7',
});

export const header = css({
  pb: '$5',
  mb: '$5',
  borderBottom: '1px solid $border',

  '& .fuel_Heading': {
    margin: 0,
  },
});

export const body = css({
  display: 'block',
});

export const footer = css({
  mt: '$5',
  pt: '$5',
  borderTop: '1px solid $border',
});

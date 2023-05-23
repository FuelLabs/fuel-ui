import { css } from '@fuel-ui/css';

export const card = css({
  layer: 'layer-card',
});

export const header = css({
  px: '$5',
  pt: '$5',

  '& .fuel_Heading': {
    margin: 0,
  },
});

export const body = css({
  display: 'block',
  px: '$5',
  py: '$5',
});

export const footer = css({
  px: '$5',
  pb: '$5',
});

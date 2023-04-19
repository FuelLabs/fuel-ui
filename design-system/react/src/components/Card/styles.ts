import { css } from '@fuel-ui/css';

export const card = css({
  layer: 'layer-card',
});

export const header = css({
  p: '$5',
  py: '$4',
  borderBottom: '1px solid $border',

  '& .fuel_Heading': {
    margin: 0,
  },
});

export const body = css({
  display: 'block',
  px: '$5',
  py: '$4',
});

export const footer = css({
  p: '$4',
  borderTop: '1px solid $border',
});

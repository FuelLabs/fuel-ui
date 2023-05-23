import { css } from '@fuel-ui/css';

export const header = css({
  mx: '$5',
  mt: '$5',

  '& .fuel_Heading': {
    margin: 0,
  },
});

export const body = css({
  mx: '$5',
  my: '$5',
});

export const footer = css({
  mx: '$5',
  mb: '$5',
});

export const card = css({
  layer: 'layer-card',

  '&[data-dividers="true"]': {
    [`& .${header}`]: {
      pb: '$3',
      borderBottom: '1px solid $border',
    },
    [`& .${footer}`]: {
      pt: '$3',
      borderTop: '1px solid $border',
    },
  },
});

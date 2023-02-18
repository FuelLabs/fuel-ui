import { css } from '@fuel-ui/css';

export const card = css({
  background: '$gray1',
  borderRadius: '$md',
  border: '1px solid transparent',
  boxShadow: '$sm',
});

export const header = css({
  p: '$5',
  borderBottom: '1px solid $borderColor',

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
  p: '$5',
  borderTop: '1px solid $borderColor',
});

import { css } from '@fuel-ui/css';

export const control = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const label = css({
  px: '$1',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  color: '$gray11',
  fontWeight: '$medium',
  fontSize: '$base',

  variants: {
    required: {
      true: {
        '&:after': {
          display: 'block',
          content: '*',
          color: '$accent11',
        },
      },
    },
  },
});

export const helperText = css({
  px: '$1',
  textSize: 'sm',

  '&[aria-hidden=true]': {
    display: 'none',
  },
});

export const errorMessage = css({
  px: '$1',
  textSize: 'sm',

  '&[aria-hidden=true]': {
    display: 'none',
  },
});

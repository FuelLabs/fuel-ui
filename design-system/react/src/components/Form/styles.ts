import { css } from '@fuel-ui/css';

export const control = css({
  is: ['display'],
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const label = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  color: '$intentsBase11',
  fontWeight: '$normal',
  fontSize: '$base',

  variants: {
    required: {
      true: {
        '&:after': {
          display: 'block',
          content: '*',
          color: '$brand',
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
  color: '$intentsError9',

  '&[aria-hidden=true]': {
    display: 'none',
  },
});

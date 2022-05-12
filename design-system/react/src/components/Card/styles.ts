import { css } from '@fuel/css';

export const card = css({
  background: '$gray1',
  borderRadius: '$md',

  variants: {
    shadow: {
      sm: {
        boxShadow: '$sm',
      },
      base: {
        boxShadow: '$base',
      },
      md: {
        boxShadow: '$md',
      },
      lg: {
        boxShadow: '$lg',
      },
      xl: {
        boxShadow: '$xl',
      },
    },
  },

  defaultVariants: {
    shadow: 'base',
  },
});

export const header = css({
  p: '$4',
  borderBottom: '1px solid $borderColor',

  '& .fuel_heading': {
    margin: 0,
  },
});

export const body = css({
  display: 'block',
  px: '$4',
  py: '$4',
});

export const footer = css({
  p: '$4',
  borderTop: '1px solid $borderColor',
});

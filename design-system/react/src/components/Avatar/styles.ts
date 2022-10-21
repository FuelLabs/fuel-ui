import { css } from '@fuel-ui/css';

export const avatar = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '100%',
  background: '$gray6',

  variants: {
    size: {
      xsm: {
        boxSize: '24px',
      },
      sm: {
        boxSize: '32px',
      },
      md: {
        boxSize: '40px',
      },
      lg: {
        boxSize: '52px',
      },
      xl: {
        boxSize: '80px',
      },
      '2xl': {
        boxSize: '100px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const image = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const fallback = css({
  width: '$full%',
  height: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate12',
  textSize: 'base',
  fontWeight: '$semibold',
});

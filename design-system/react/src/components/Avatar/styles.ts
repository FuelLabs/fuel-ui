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
      sm: {
        boxSize: '30px',
      },
      md: {
        boxSize: '40px',
      },
      lg: {
        boxSize: '50px',
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

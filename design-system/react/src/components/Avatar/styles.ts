import { Components } from '~/defs';
import { createStyle } from '~/hooks';

export const styles = createStyle(Components.Avatar, {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: '$lg',
    background: '$intentsBase6',

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
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
  fallback: {
    width: '$full%',
    height: '$full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$slate12',
    textSize: 'base',
    fontWeight: '$normal',
  },
  generated: {
    display: 'inline-block',
    borderRadius: '$full',
    overflow: 'hidden',
  },
});

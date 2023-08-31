import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';
import type { SizesMap } from '~/utils/types';

export const SIZES_MAP: SizesMap = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
  '2xl': 64,
};

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

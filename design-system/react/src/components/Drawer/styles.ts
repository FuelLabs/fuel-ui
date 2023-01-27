import { css, cssObj } from '@fuel-ui/css';

export const overlay = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'transparent',
  pointerEvents: 'none',
  '&[data-state="open"]': {
    pointerEvents: 'auto',
  },
});

export const underlay = css({
  position: 'absolute',
  zIndex: '$50',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  pointerEvents: 'none',

  variants: {
    side: {
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
});

export const content = css({
  overflowX: 'auto',
  position: 'relative',
  minHeight: '100%',
  maxHeight: '100%',
  background: '$gray1',
  boxShadow: '$lg',
  pointerEvents: 'auto',
});

export const close = cssObj({
  position: 'absolute',
  top: '$2',
  right: '$2',
  padding: '$0',
});

// ----------------------------------------------------------------------------
// Sizes
// ----------------------------------------------------------------------------

type Size = string | number;

const SIZES = {
  sm: '300px',
  md: '500px',
  lg: '768px',
};

export function getSize(size: Size) {
  const width = SIZES[size] || size;
  return { maxWidth: width, width };
}

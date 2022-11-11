import { cssObj, keyframes } from '@fuel-ui/css';

const shineAnimation = keyframes({
  from: {
    left: '-25%',
  },
  to: {
    left: '100%',
  },
});

export const skeletonStyles = {
  wrapper: cssObj({
    position: 'relative',
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    cursor: 'progress',
  }),

  skeleton: cssObj({
    background: '$skeletonBackground',
    animation: `${shineAnimation} 1s linear infinite`,
    opacity: 0.8,
    'animation-direction': 'alternate',
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'unset',
    },
  }),
  avatar: cssObj({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: '100%',
    background: '$skeletonBackground',

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
  }),
  line: cssObj({
    height: '12px',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '10px',
    backgroundColor: '$skeletonBackground',
  }),
  linesWrapper: cssObj({
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  }),
};

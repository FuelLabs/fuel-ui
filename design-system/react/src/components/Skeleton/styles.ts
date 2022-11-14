import { keyframes, cssObj, css } from '@fuel-ui/css';

const sizes = [80, 120, 160, 200];

const randomSize = () => sizes[Math.floor(Math.random() * sizes.length)];

const shiningAnimation = keyframes({
  from: {
    backgroundPosition: '-100vw',
    backgroundSize: '100vw',
  },
  to: {
    backgroundPosition: '100vw',
    backgroundSize: '100vw',
  },
});

export const skeletonStyles = {
  column: cssObj({ flexDirection: 'column' }),
  animation: cssObj({
    backgroundColor: 'rgba(255,255,255,0.4)',
    backgroundImage:
      'linear-gradient(90deg, rgba(255, 255,255, 0.1) 0%, #bdbdbd 20%,  #d8d8d8 40%, #d8d8d8 70%, rgba(255, 255,255, 0.1) 100%)',
    backgroundRepeat: 'no-repeat',
    animation: `${shiningAnimation.name} 0.8s linear infinite`,
    animationDirection: 'alternate',
    opacity: 0.2,
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'unset',
    },
  }),
  avatar: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: '100%',
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
    width: `${randomSize()}px`,
    borderRadius: '$md',
  }),
  box: cssObj({
    height: '50px',
    width: '100%',
    borderRadius: '$md',
  }),
};

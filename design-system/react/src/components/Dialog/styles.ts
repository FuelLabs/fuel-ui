import { css, keyframes } from '@fuel-ui/css';

const overlayShow = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const overlay = css({
  inset: 0,
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,.5)',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

export const content = css({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  br: '$md',
  backgroundColor: '$gray1',
  boxShadow: '$md',
  transform: 'translate(-50%, -50%)',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },

  '&:focus': {
    outline: 'none',
  },
});

export const heading = css({
  p: '$4',
  m: '$0',
  color: '$gray12',
  fontFamily: '$heading',
  fontSize: '$xl',
  borderBottom: '1px solid $borderColor',
});

export const description = css({
  p: '$4',
  my: '$0',
  color: '$gray10',
  textSize: 'base',
});

export const footer = css({
  is: ['centered'],
  gap: '$3',
  mt: '$2',
  p: '$4',
  borderTop: '1px solid $borderColor',

  variants: {
    align: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
  },

  defaultVariants: {
    align: 'end',
  },
});

export const closeButton = css({
  is: ['centered', 'noAppearance'],
  cursor: 'pointer',
  position: 'absolute',
  border: '2px solid transparent',
  top: '$2',
  right: '$2',
  px: '$0',

  '&:focus': {
    borderRadius: '$md',
    borderColor: '$gray8',
  },
});

import { keyframes } from '@fuel-ui/css';

import { Components } from '~/defs';
import { createStyle } from '~/hooks';

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

export const styles = createStyle(Components.AlertDialog, {
  root: {},
  description: {
    p: '$0',
    color: '$intentsBase10',
    textSize: 'base',
  },
  overlay: {
    inset: 0,
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,.5)',

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
  },
  content: {
    p: '$7',
    layer: 'layer-dialog',
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    transform: 'translate(-50%, -50%)',

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },

    '&:focus-visible': {
      outline: 'none',
    },
  },
  trigger: {},
  footer: {
    is: ['centered'],
    gap: '$3',
    p: '$0',

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
  },
  heading: {
    p: '$0',
    m: '$0',
    color: '$intentsBase12',
    fontFamily: '$heading',
    fontSize: '$xl',
  },
  action: {},
  cancel: {},
});

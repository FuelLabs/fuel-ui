import { keyframes, css } from '@fuels-ui/css';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const arrow = css({
  fill: '$gray12',
});

export const content = css({
  borderRadius: '$md',
  py: '$4',
  px: '$5',
  pr: '$7',
  fontSize: '$sm',
  lineHeight: 1,
  color: '$gray1',
  backgroundColor: '$gray12',
  boxShadow: '$md',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  '&:not([aria-disabled=true]):focus': {
    outline: `3px solid $gray10`,
  },
});

export const closeButton = css({
  is: ['centered', 'noAppearance'],
  cursor: 'pointer',
  position: 'absolute',
  border: '2px solid transparent',
  top: '$2',
  right: '$2',
  p: '$1',
  color: '$gray10',

  '&:focus': {
    borderRadius: '$md',
    outline: `2px solid $accent9`,
  },
});

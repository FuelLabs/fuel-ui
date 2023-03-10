import { lightColors, css, darkColors, keyframes } from '@fuel-ui/css';

import { darkTheme, lightTheme } from '~/hooks';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const root = css({
  borderRadius: '$md',
  maxW: '$full',
});

export const item = css({
  overflow: 'hidden',
  borderTop: '1px solid $bodyColor',

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: '$md',
    borderTopRightRadius: '$md',
  },

  '&:last-child': {
    borderBottomLeftRadius: '$md',
    borderBottomRightRadius: '$md',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },

  [`.${darkTheme} &`]: {
    backgroundColor: '$gray1',
  },
  [`.${darkTheme} &:has(.fuel_AccordionTrigger:focus-visible)`]: {
    outline: `2px solid ${darkColors.gray4}`,
  },

  [`.${lightTheme} &`]: {
    backgroundColor: 'white',
  },
  [`.${lightTheme} &:has(.fuel_AccordionTrigger:focus-visible)`]: {
    outline: `2px solid ${lightColors.gray7}`,
  },
});

export const header = css({
  all: 'unset',
  display: 'flex',
});

export const trigger = css({
  all: 'unset',
  fontFamily: '$sans',
  fontWeight: '$semibold',
  px: '$4',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid $bodyColor',
  textSize: 'base',
  transition: 'color .2s',

  '&[data-state="closed"]': {
    color: '$gray12',
  },
  '&[data-state="open"]': {
    color: '$accent11',
  },
  '&:hover': {
    color: '$accent11',
  },
});

export const content = css({
  overflow: 'hidden',
  background: 'transparent',
  padding: '$4',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

export const chevron = css({
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

  '[data-state="open"] &': {
    transform: 'rotate(180deg)',
  },
});

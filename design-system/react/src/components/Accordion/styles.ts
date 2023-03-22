import { lightColors, darkColors, keyframes } from '@fuel-ui/css';

import { createStyle, darkTheme, lightTheme } from '~/hooks';
import { Components } from '~/types';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const rootStyles = createStyle(Components.Accordion, {
  root: {
    borderRadius: '$default',
    maxW: '$full',
  },
});

export const contentStyles = createStyle(Components.AccordionContent, {
  content: {
    overflow: 'hidden',
    background: 'transparent',
    padding: '$4',

    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
  },
});

export const itemStyles = createStyle(Components.AccordionItem, {
  item: {
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

    [`.${darkTheme.theme} &`]: {
      backgroundColor: '$cardBg',
    },
    [`.${darkTheme.theme} &:has(.fuel_AccordionTrigger:focus-visible)`]: {
      outline: `2px solid ${darkColors.gray4}`,
    },

    [`.${lightTheme.theme} &`]: {
      backgroundColor: 'white',
    },
    [`.${lightTheme.theme} &:has(.fuel_AccordionTrigger:focus-visible)`]: {
      outline: `2px solid ${lightColors.gray7}`,
    },
  },
});

export const triggerStyles = createStyle(Components.AccordionTrigger, {
  header: {
    all: 'unset',
    display: 'flex',
  },
  trigger: {
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
  },
  icon: {
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

    '[data-state="open"] &': {
      transform: 'rotate(180deg)',
    },
  },
});

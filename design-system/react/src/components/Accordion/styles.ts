import { lightColors, darkColors, keyframes } from '@fuel-ui/css';
import { Components } from '~/defs';
import { createStyle, darkTheme, lightTheme } from '~/hooks';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const styles = createStyle(Components.Accordion, {
  root: {
    borderRadius: '$default',
    maxW: '$full',
  },
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
  item: {
    overflow: 'hidden',
    borderTop: '1px solid $bodyColor',

    '& ~ &': {
      mt: '$2',
    },

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
    [`.${darkTheme.theme} &:has(.fuel_Accordion-trigger:focus-visible)`]: {
      outline: `2px solid ${darkColors.gray4}`,
    },

    [`.${lightTheme.theme} &`]: {
      backgroundColor: 'white',
    },
    [`.${lightTheme.theme} &:has(.fuel_Accordion-trigger:focus-visible)`]: {
      outline: `2px solid ${lightColors.gray7}`,
    },
  },
  trigger: {
    all: 'unset',
    layer: 'layer-card',
    fontFamily: '$sans',
    fontWeight: '$normal',
    px: '$4',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textSize: 'base',
    transition: 'color .2s',

    '&[data-state="closed"]': {
      color: '$intentsBase12',
    },
    '&[data-state="open"]': {
      color: '$brand',
    },
    '&:hover': {
      color: '$brand',
    },
  },
  header: {
    all: 'unset',
    display: 'flex',
  },
  icon: {
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

    '[data-state="open"] &': {
      transform: 'rotate(180deg)',
    },
  },
});

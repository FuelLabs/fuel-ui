import { colors, css, darkColors, darkTheme, keyframes, theme as lightTheme } from '@fuel-ui/css';

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
    backgroundColor: '$blackA9',
  },
  [`.${darkTheme} &:focus-within`]: {
    outline: `2px solid ${darkColors.gray4}`,
  },
  [`.${darkTheme} & ~ &`]: {
    borderTop: '1px solid $gray2',
  },

  [`.${lightTheme} &`]: {
    backgroundColor: 'white',
  },
  [`.${lightTheme} &:focus-within`]: {
    outline: `2px solid ${colors.gray7}`,
  },
  [`.${lightTheme} & ~ &`]: {
    borderTop: '1px solid $gray4',
  },
});

export const header = css({
  all: 'unset',
  display: 'flex',
});

export const trigger = css({
  all: 'unset',
  fontFamily: 'inherit',
  px: '$4',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textSize: 'base',
  transition: 'color .2s',

  '&[data-state="closed"]': {
    color: '$gray9',
  },
  '&[data-state="open"]': {
    color: '$accent9',
  },
  '&:hover': {
    color: '$accent9',
  },

  [`.${darkTheme} &[data-state="open"]`]: {
    borderBottom: '1px solid $gray2',
  },
  [`.${lightTheme} &[data-state="open"]`]: {
    borderBottom: '1px solid $gray5',
  },
});

export const content = css({
  overflow: 'hidden',
  background: 'transparent',

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

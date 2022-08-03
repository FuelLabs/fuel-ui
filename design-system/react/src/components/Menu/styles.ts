import { css, lightTheme } from '@fuel-ui/css';

export const menu = css({
  p: '$0',
  py: '$2',
  m: '$0',
  borderRadius: '$md',
  backgroundColor: '$blackA9',

  [`.${lightTheme} &`]: {
    backgroundColor: '$gray1',
    boxShadow: '$sm',
  },
});

export const item = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  height: '$9',
  px: '$4',
  opacity: 0.4,

  '&:not([aria-disabled="true"])': {
    cursor: 'pointer',
    opacity: 1,
  },

  '&:focus': {
    outline: '1px solid $gray3',
  },
  '&:focus::after': {
    display: 'block',
    content: '',
    height: '100%',
    width: '3px',
    position: 'absolute',
    backgroundColor: '$accent9',
    top: 0,
    left: 0,
  },

  [`.${lightTheme} &:focus`]: {
    outlineColor: '$gray5',
  },
});

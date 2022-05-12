import { css, darkTheme, theme } from '@fuel/css';

export const card = css({
  background: '$gray1',
  borderRadius: '$md',
  border: '1px solid transparent',

  [`.${theme} &`]: {
    boxShadow: '$sm',
  },

  [`.${darkTheme} &`]: {
    borderColor: '$borderColor',
  },
});

export const header = css({
  p: '$4',
  borderBottom: '1px solid $borderColor',

  '& .fuel_heading': {
    margin: 0,
  },
});

export const body = css({
  display: 'block',
  px: '$4',
  py: '$4',
});

export const footer = css({
  p: '$4',
  borderTop: '1px solid $borderColor',
});

import { css } from '@fuel-ui/css';

export const root = css({
  display: 'flex',
  alignItems: 'center',

  '& > .fuel_button ~ .fuel_button': {
    marginLeft: 1,
  },
  '& > .fuel_button:first-of-type': {
    borderTopRightRadius: '$0',
    borderBottomRightRadius: '$0',
  },
  '& > .fuel_button:last-of-type': {
    borderTopLeftRadius: '$0',
    borderBottomLeftRadius: '$0',
  },
  '& > .fuel_button:not(:first-of-type,:last-of-type)': {
    borderRadius: '$0',
  },
  '& > .fuel_button:focus-visible': {
    zIndex: 1,
    position: 'relative',
  },
});

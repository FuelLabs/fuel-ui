import { css } from '@fuel-ui/css';

export const root = css({
  display: 'flex',
  alignItems: 'center',

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
    borderLeft: '0',
    borderRight: 0,
  },
  '& > .fuel_button': {
    outlineOffset: '1px',
  },
});

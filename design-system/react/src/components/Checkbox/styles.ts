import { Components } from '~/defs';
import { createStyle } from '~/hooks';

export const styles = createStyle(Components.Checkbox, {
  root: {
    all: 'unset',
    cursor: 'pointer',
    overflow: 'clip',
    position: 'relative',
    width: '$6',
    height: '$6',
    borderRadius: '$sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$base',
    border: '1px solid $border',
    transition: 'all .2s',

    '&:after': {
      boxSizing: 'content-box',
      position: 'absolute',
      display: 'block',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transform: 'translate(-1px, -1px)',
    },

    '&:focus-within': {
      outline: '2px solid $intentsBase4',
    },

    '&[data-state="checked"]': {
      background: '$brand',
      borderColor: '$brand',
    },

    '& .fuel_Icon': {
      color: 'inherit',
    },

    '&[aria-disabled=true]': {
      cursor: 'default',
      background: '$inputDisabledBorder',
      borderColor: '$inputDisabledBorder',
    },
  },
  indicator: {
    is: ['centered'],
    color: '$bodyBg',
  },
});

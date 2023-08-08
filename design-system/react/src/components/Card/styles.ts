import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Card, {
  root: {
    layer: 'layer-card',

    display: 'flex',
    flexDirection: 'column',

    '&:focus-visible': {
      outline: 'none',
    },

    '&[data-is-clickable=true]:focus-visible': {
      outline: '2px solid $intentsBase1',
      outlineOffset: 1,
    },
  },
  body: {
    px: '$4',
    py: '$4',
  },
  footer: {
    px: '$4',
    pb: '$4',
    pt: '$4',
    borderTop: '1px solid $border',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '$3',
  },
  header: {
    px: '$4',
    py: '$4',
    borderBottom: '1px solid $border',

    '& .fuel_Heading': {
      margin: 0,
    },

    '&[data-space=compact]': {
      py: '$2',
      fontSize: '$sm',
    },
  },
});

import { Components } from '~/defs';
import { createStyle } from '~/hooks';

export const styles = createStyle(Components.CardList, {
  root: {},
  item: {
    is: ['centered'],
    layer: 'layer-card',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',
    padding: '$4 !important',
    gap: '$3',
    transition: 'border 0.2s',

    '&[data-is-active="true"]': {
      '&::after': {
        position: 'absolute',
        display: 'block',
        content: '""',
        top: 0,
        left: 0,
        width: '3px',
        height: '100%',
        background: '$brand',
      },
    },

    '&[data-is-clickable="true"]': {
      cursor: 'pointer',

      '&:hover, &:focus-within': {
        outline: 'none',
        borderColor: '$borderHover',
      },
    },
  },
});

import { Components } from '~/defs';
import { createStyle } from '~/hooks';

export { close } from '../Dialog/styles';

// ----------------------------------------------------------------------------
// Sizes
// ----------------------------------------------------------------------------

type Size = string | number;

const SIZES = {
  sm: '300px',
  md: '500px',
  lg: '768px',
};

export function getSize(size: Size) {
  const width = SIZES[size] || size;
  return { maxWidth: width, width };
}

export const styles = createStyle(Components.Drawer, {
  content: {
    overflowX: 'auto',
    position: 'relative',
    minHeight: '100%',
    maxHeight: '100%',
    background: '$dialogBg',
    boxShadow: '$lg',
  },
  underlay: {
    position: 'absolute',
    zIndex: '$50',
    inset: 0,
    background: '$blackA10',
    display: 'flex',

    variants: {
      side: {
        left: {
          justifyContent: 'flex-start',

          '.fuel_DrawerContent': {
            borderRight: '1px solid $border',
          },
        },
        right: {
          justifyContent: 'flex-end',

          '.fuel_DrawerContent': {
            borderLeft: '1px solid $border',
          },
        },
      },
    },

    defaultVariants: {
      side: 'right',
    },
  },
  overlay: {},
  body: {},
  trigger: {},
  close: {},
});

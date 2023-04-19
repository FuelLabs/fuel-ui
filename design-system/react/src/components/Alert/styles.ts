import { toCamelCase } from '@fuel-ui/css';

import { Components } from '~/defs';
import { createStyle } from '~/hooks';

function createVariantStyle(key: string) {
  const color = `$${toCamelCase(`intents-${key}-11`)}`;
  const bg = `$${toCamelCase(`intents-${key}-4`)}`;
  const border = `1px solid $${toCamelCase(`intents-${key}-6`)}`;

  return {
    bg,
    color,
    border,

    '& .fuel_Heading, & .fuel_Icon': {
      color,
    },

    '& .fuel_Button': {
      p: 0,
      color,
      fontWeight: '$semibold',
    },
  };
}

const STATUSES = ['info', 'warning', 'success', 'error'];

export const styles = createStyle(Components.Alert, {
  root: {
    layer: 'layer-card',
    padding: '$4',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$4',

    '.fuel_Alert-content': {
      flex: 1,
      gap: '$3',
    },

    '& .fuel_Heading': {
      fontWeight: '$bold',
      textSize: 'lg',
      margin: 0,
    },

    variants: {
      status: {
        ...STATUSES.reduce((obj, status) => {
          return {
            ...obj,
            [status]: createVariantStyle(status),
          };
        }, {}),
      },

      direction: {
        column: {
          '.fuel_Alert-content': {
            flexDirection: 'column',
          },
          '.fuel_Alert-icon': {
            pt: '5px',
            alignSelf: 'stretch',
          },
        },
        row: {
          '.fuel_Alert-content': {
            flexDirection: 'row',
          },
          '.fuel_Alert-icon': {
            display: 'flex',
            alignSelf: 'stretch',
            alignItems: 'center',
          },
        },
      },
    },

    defaultVariants: {
      status: 'info',
      direction: 'column',
    },
  },
  title: {
    display: 'flex',

    '& h3': {
      m: 0,
      fontSize: '$base',
    },
  },
  description: {
    flex: 1,
    margin: 0,
  },
  actions: {
    display: 'flex',
    gap: '$4',
  },
  icon: {},
  content: {},
  button: {},
});

import { toCamelCase } from '@fuel-ui/css';
import { Components } from '~/defs';
import { createStyle } from '~/hooks';

function createVariantStyle(key: string) {
  const color = `$${toCamelCase(`semantic-ghost-${key}-color`)}`;
  const iconColor = `$${toCamelCase(`semantic-ghost-${key}-icon`)}`;
  const background = `$${toCamelCase(`semantic-ghost-${key}-disabled-bg`)}`;

  return {
    color,
    background,

    '& .fuel_Heading': {
      color,
    },

    '& .fuel_Alert-icon .fuel_Icon': {
      color: iconColor,
    },

    '& .fuel_Button': {
      p: 0,
      fontWeight: '$normal',
      color,
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
      gap: '$2',
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

    '.fuel_Heading': {
      m: 0,
      fontWeight: '$semibold',
      fontSize: '$md',
      lineHeight: '$tight',
    },
  },
  description: {
    flex: 1,
    margin: 0,
    fontSize: '$sm',
    lineHeight: '$snug',
  },
  actions: {
    display: 'flex',
    gap: '$4',
  },
  icon: {},
  content: {},
  button: {},
});

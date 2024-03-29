export function toCamelCase(str: string): string {
  return str.replace(/(?:^\w|[A-Z]|-|\b\w|\s+)/g, (match, index) => {
    if (+match === 0 || match === '-') return ''; // remove spaces and hyphens
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function addBaseCSS(key: string) {
  return {
    bg: `$${key}Bg`,
    border: `1px solid $${key}Border`,
    color: `$${key}Color`,

    '&[aria-disabled="true"]': {
      bg: `$${key}DisabledBg`,
      borderColor: `$${key}DisabledBorder`,
      color: `$${key}DisabledColor`,
      cursor: 'not-allowed',

      '& .fuel_Icon': {
        color: `$${key}DisabledIcon`,
      },

      '&:hover': {
        textDecoration: 'none',
      },
    },
  };
}

function addPlaceholderCSS(key: string) {
  return {
    '::-webkit-input-placeholder': {
      color: `$${key}Placeholder`,
    },
    '::-moz-placeholder': {
      color: `$${key}Placeholder`,
    },
    ':-ms-input-placeholder': {
      color: `$${key}Placeholder`,
    },
    ':-moz-placeholder': {
      color: `$${key}Placeholder`,
    },
  };
}

function addFocusStyle(key: string) {
  const isInput = key.includes('input');

  return {
    transitionProperty: 'background, border',
    transitionDuration: '0.2s',

    '&:active, &[aria-pressed=true]': {
      outline: 'none',
    },
    ...(isInput
      ? {
          '&:not([aria-disabled=true]).focused': {
            borderColor: `$inputActiveBorder`,
            outline: `2px solid $${key}Focus`,
            outlineOffset: '1px',
          },

          '&:not([aria-disabled=true]):focus-within': {
            borderColor: `$inputActiveBorder`,
          },
        }
      : {
          '&:not([aria-disabled=true]).focused': {
            outline: `2px solid $${key}Focus`,
            outlineOffset: '1px',
          },
        }),
  };
}

export type LayerVariant = 'solid' | 'ghost' | 'outlined' | 'link';
export type LayerIntent =
  | 'primary'
  | 'base'
  | 'info'
  | 'warning'
  | 'success'
  | 'error';

export type SemanticLayer =
  | `layer-${LayerVariant}-${LayerIntent}`
  | 'layer-card'
  | 'layer-overlay'
  | 'layer-dialog';

export type InputVariant = 'base' | 'disabled' | 'error' | 'success';
export type InputLayer = `input-${InputVariant}`;

export const layerVariants = [
  'solid',
  'ghost',
  'outlined',
  'link',
] as LayerVariant[];

export const layerIntents = [
  'primary',
  'base',
  'info',
  'warning',
  'success',
  'error',
] as LayerIntent[];

export const inputVariants = [
  'base',
  'disabled',
  'error',
  'success',
] as InputVariant[];

const semanticLayers = layerVariants.reduce((obj, variant) => {
  const next = layerIntents.reduce((innerObj, intent) => {
    const key = toCamelCase(`semantic-${variant}-${intent}`);
    return {
      ...innerObj,
      [key]: {
        ...addBaseCSS(key),
        ...addPlaceholderCSS(key),
        ...addFocusStyle(key),

        '& .fuel_Icon': {
          color: `$${key}Icon`,
        },

        '&:not([aria-disabled="true"]):hover': {
          bg: `$${key}HoverBg`,
          border: `1px solid $${key}HoverBorder`,
          color: `$${key}HoverColor`,
        },

        '&:not([aria-disabled="true"]):hover .fuel_Icon': {
          color: `$${key}HoverIcon`,
        },
      },
    };
  }, {});
  return { ...obj, ...next };
}, {});

const inputLayers = inputVariants.reduce((obj, variant) => {
  const key = toCamelCase(`input-${variant}`);
  return {
    ...obj,
    [key]: {
      ...addBaseCSS(key),
      ...addPlaceholderCSS(key),
      ...addFocusStyle(key),

      '& .fuel_Icon': {
        color: `$${key}Icon`,
      },
    },
  };
}, {});

const layerCard = {
  background: '$cardBg',
  borderRadius: '$default',
  border: '1px solid $cardBorder',
};

const layerDialog = {
  background: '$dialogBg',
  borderRadius: '$default',
  border: '1px solid $border',
};

const layerOverlay = {
  background: '$overlayBg',
  borderRadius: '$default',
  color: '$overlayText',

  '.fuel_Heading, .fuel_Text': {
    color: '$overlayText',
  },
};

export const layers = {
  ...semanticLayers,
  ...inputLayers,
  layerCard,
  layerDialog,
  layerOverlay,
};

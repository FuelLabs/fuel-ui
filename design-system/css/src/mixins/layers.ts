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
      color: `$${key}DisabledColor`,
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

const layerVariants = ['ghost', 'solid', 'outlined', 'link'];
const layerIntents = ['primary', 'base', 'info', 'warning', 'success', 'error'];
const inputVariants = ['base', 'disabled', 'error', 'success'];

const semanticLayers = layerVariants.reduce((obj, variant) => {
  const next = layerIntents.reduce((innerObj, intent) => {
    const key = toCamelCase(`semantic-${variant}-${intent}`);
    return {
      ...innerObj,
      [key]: {
        ...addBaseCSS(key),
        ...addPlaceholderCSS(key),

        '&:hover': {
          bg: `$${key}HoverBg`,
          border: `1px solid $${key}HoverBorder`,
          color: `$${key}HoverColor`,
        },

        '& .fuel_Icon': {
          color: `$${key}Icon`,
        },

        '&:hover .fuel_Icon': {
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

      '& .fuel_Icon': {
        color: `$${key}Icon`,
      },
    },
  };
}, {});

const card = {
  background: '$cardBg',
  borderRadius: '$default',
  border: '1px solid $border',
  boxShadow: '$sm',
};

const overlay = {
  background: '$overlayBg',
  borderRadius: '$default',
  border: '1px solid $border',
  boxShadow: '$sm',
};

export const layers = {
  ...semanticLayers,
  ...inputLayers,
  card,
  overlay,
};

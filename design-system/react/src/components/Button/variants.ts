import type { ColorKeys } from '@fuel-ui/css';
import { darkColors, colorKeys, isBright } from '@fuel-ui/css';

function createSolidVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor);
  const outlineColor = `$${color}5`;
  const background = isBright(color) ? `$${color}11` : `$${color}9`;
  const textColor = isBright(color) ? `$${color}3` : `$${color}1`;

  return {
    background,
    borderColor: 'transparent',
    color: textColor,

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        borderColor: '$whiteA7',
        boxShadow: `inset 0 0 1000px ${darkColors.whiteA7}`,
      },
    }),

    '&:not([aria-disabled=true]):focus': {
      outline: `3px solid ${outlineColor}`,
    },
  };
}

function createOutlinedVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor);
  const textColor = `$${color}11`;
  const borderColor = `$${color}7`;
  const hoverBg = `$${color}4`;

  return {
    borderColor,
    background: 'transparent',
    color: textColor,

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        borderColor,
        boxShadow: 'none',
        background: hoverBg,
      },
    }),
  };
}

function createGhostVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor);
  const background = `$${color}3`;
  const hover = `$${color}5`;
  const textColor = `$${color}11`;

  return {
    background,
    color: textColor,
    borderColor: 'transparent',

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        borderColor: 'transparent',
        boxShadow: 'none',
        background: hover,
      },
    }),

    '&:not([aria-disabled=true]):focus': {
      outline: `3px solid $${color}2`,
      outlineOffset: '1px',
    },
  };
}

function createLinkVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor);
  const textColor = `$${color}11`;

  return {
    py: '$1',
    px: '$1',
    height: 'auto',
    minW: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    color: textColor,

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        borderColor: 'transparent',
        boxShadow: 'none',
        backgroundColor: 'transparent !important',
        textDecoration: 'underline',
      },
    }),

    '&:not([aria-disabled=true]):focus': {
      outline: `2px solid $${color}2`,
      outlineOffset: '1px',
    },
  };
}

export const size = {
  xs: {
    gap: '5px',
    px: '$2',
    fontSize: '$xs',
    height: '$7',
  },
  sm: {
    gap: '$2',
    px: '$3',
    fontSize: '$sm',
    height: '$8',
  },
  md: {
    gap: '$2',
    px: '$4',
    fontSize: '$base',
    height: '$10',
  },
  lg: {
    gap: '$3',
    px: '$5',
    fontSize: '$lg',
    height: '$12',
  },
};

export function getSolidVariants(hasHover?: boolean) {
  return colorKeys.reduce(
    (obj, key: ColorKeys) => ({
      ...obj,
      [key]: createSolidVariant(key, hasHover),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<ColorKeys, any>
  );
}

export function getOutlinedVariants(hasHover?: boolean) {
  return colorKeys.map((key) => ({
    color: key,
    variant: 'outlined',
    css: createOutlinedVariant(key, hasHover),
  }));
}

export function getGhostVariants(hasHover?: boolean) {
  return colorKeys.map((key) => ({
    color: key,
    variant: 'ghost',
    css: createGhostVariant(key, hasHover),
  }));
}

export function getLinkVariants(hasHover?: boolean) {
  return colorKeys.map((key) => ({
    color: key,
    variant: 'link',
    css: createLinkVariant(key, hasHover),
  }));
}

export const colors = {
  solid: getSolidVariants(),
  outlined: getOutlinedVariants(),
  ghost: getGhostVariants(),
  link: getLinkVariants(),
};

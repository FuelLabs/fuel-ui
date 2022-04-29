import { css, ColorKeys, allColorKeys, isBright } from '@fuel/css'

function createSolidVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const background = isBright(color) ? `$${color}7` : `$${color}8`
  const hoverColor = isBright(color) ? `$${color}8` : `$${color}9`
  const textColor = isBright(color) ? `$${color}11` : `$${color}1`
  return {
    background,
    fontWeight: '$semibold',
    borderColor: 'transparent',
    color: textColor,

    '&:not(.disabled):hover': {
      background: hoverColor,
    },
  }
}

function createOutlinedVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = isBright(color) ? `$${color}11` : `$${color}10`
  const borderColor = `$${color}8`
  const hoverTextColor = `$${color}1`
  return {
    borderColor,
    background: 'transparent',
    color: textColor,
    '&:not(.disabled):hover': {
      color: hoverTextColor,
      background: borderColor,
    },
  }
}

function createGhostVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const background = `$${color}3`
  const hover = `$${color}5`
  const textColor = `$${color}11`
  return {
    background,
    color: textColor,
    borderColor: 'transparent',
    '&:not(.disabled):hover': {
      background: hover,
    },
  }
}

function createLinkVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}11`
  return {
    p: '0',
    height: 'auto',
    minW: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    color: textColor,
    '&:hover': {
      backgroundColor: 'transparent !important',
      textDecoration: 'underline',
    },
  }
}

export const button = css({
  appearance: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  borderRadius: '$lg',
  transition: 'all',

  variants: {
    size: {
      xs: {
        gap: '5px',
        px: '$2',
        fontSize: '$xs',
        height: '$7',
        minW: '$6',
      },
      sm: {
        gap: '$2',
        px: '$3',
        fontSize: '$sm',
        height: '$8',
        minW: '$9',
      },
      md: {
        gap: '$2',
        px: '$4',
        fontSize: '$base',
        height: '$10',
        minW: '$14',
      },
      lg: {
        gap: '$3',
        px: '$5',
        fontSize: '$lg',
        height: '$12',
        minW: '$20',
      },
    },

    color: {
      ...allColorKeys.reduce(
        (obj, key: any) => ({ ...obj, [key]: createSolidVariant(key) }),
        {}
      ),
    },

    variant: {
      solid: {},
      outlined: {},
      ghost: {},
      link: {},
    },

    disabled: {
      true: {
        opacity: '0.6',
        cursor: 'default',
      },
    },

    justIcon: {
      true: {
        minW: 'auto',
      },
    },
  },

  compoundVariants: [
    /**
     * Outlined
     */
    ...allColorKeys.map((key) => ({
      color: key,
      variant: 'outlined',
      css: createOutlinedVariant(key),
    })),

    /**
     * Ghost
     */
    ...allColorKeys.map((key) => ({
      color: key,
      variant: 'ghost',
      css: createGhostVariant(key),
    })),

    /**
     * Link
     */
    ...allColorKeys.map((key) => ({
      color: key,
      variant: 'link',
      css: createLinkVariant(key),
    })),

    /**
     * Sizes when with just icon prop
     */
    {
      size: 'xs',
      justIcon: true,
      css: { px: '$2' },
    },
    {
      size: 'sm',
      justIcon: true,
      css: { px: '$2' },
    },
    {
      size: 'md',
      justIcon: true,
      css: { px: '$3' },
    },
    {
      size: 'lg',
      justIcon: true,
      css: { px: '$4' },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'accent',
    variant: 'solid',
  },
})

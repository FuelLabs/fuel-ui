import { ColorKeys, allColorKeys } from '@fuel/css'
import { css, colors } from '@fuel/css'
import Color from 'color'

function createSolidVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const background = colors[`${color}500`]
  const borderColor = Color(background).darken(0.2).toString()
  return {
    boxShadow: `$sm`,
    fontWeight: '$semibold',
    borderColor: borderColor,
    background: `$${color}500`,
    color: `white`,
    '&:not(.disabled):hover': {
      background: borderColor,
    },
  }
}

function createOutlinedVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}600`
  const borderColor = `$${color}500`
  return {
    borderColor,
    background: 'transparent',
    color: textColor,
    '&:not(.disabled):hover': {
      color: 'white',
      background: borderColor,
    },
  }
}

function createGhostVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = colors[`${color}600`]
  const background = colors[`${color}100`]
  const hover = Color(background).darken(0.05).saturate(0.2).toString()
  return {
    background,
    color: textColor,
    boxShadow: 'none',
    borderColor: 'transparent',
    '&:not(.disabled):hover': {
      background: hover,
    },
  }
}

function createLinkVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}600`
  return {
    p: '0',
    height: 'auto',
    minW: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    boxShadow: 'none',
    color: textColor,
    '&:hover': {
      background: 'transparent',
      textDecoration: 'underline',
    },
  }
}

export const button = css({
  appearance: 'none',
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
    color: 'primary',
    variant: 'solid',
  },
})

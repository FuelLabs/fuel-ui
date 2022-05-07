import type { ColorKeys } from '@fuel/css'
import { colorKeys, isBright } from '@fuel/css'

function createSolidVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor)
  const outlineColor = `$${color}5`
  const background = isBright(color) ? `$${color}6` : `$${color}9`
  const hoverColor = isBright(color) ? `$${color}7` : `$${color}10`
  const textColor = isBright(color) ? `$${color}12` : `$${color}1`
  const borderColor = isBright(color) ? `$${color}8` : `$${color}11`

  return {
    background,
    borderColor,
    color: textColor,

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        background: hoverColor,
      },
    }),

    '&:not([aria-disabled=true]):focus': {
      outline: `3px solid ${outlineColor}`,
    },
  }
}

function createOutlinedVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor)
  const textColor = `$${color}11`
  const borderColor = `$${color}7`
  const hoverBg = `$${color}5`

  return {
    borderColor,
    background: 'transparent',
    color: textColor,

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        background: hoverBg,
      },
    }),
  }
}

function createGhostVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor)
  const background = `$${color}3`
  const hover = `$${color}5`
  const textColor = `$${color}11`

  return {
    background,
    color: textColor,
    borderColor: 'transparent',

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        background: hover,
      },
    }),
  }
}

function createLinkVariant(keyColor: ColorKeys, hasHover = true) {
  const color = String(keyColor)
  const textColor = `$${color}11`

  return {
    p: '0',
    height: 'auto',
    minW: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    color: textColor,

    ...(hasHover && {
      '&:not([aria-disabled=true]):hover': {
        backgroundColor: 'transparent !important',
        textDecoration: 'underline',
      },
    }),
  }
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
}

export function getSolidVariants(hasHover?: boolean) {
  return colorKeys.reduce(
    (obj, key: any) => ({ ...obj, [key]: createSolidVariant(key, hasHover) }),
    {}
  )
}

export function getOutlinedVariants(hasHover?: boolean) {
  return colorKeys.map((key) => ({
    color: key,
    variant: 'outlined',
    css: createOutlinedVariant(key, hasHover),
  }))
}

export function getGhostVariants(hasHover?: boolean) {
  return colorKeys.map((key) => ({
    color: key,
    variant: 'ghost',
    css: createGhostVariant(key, hasHover),
  }))
}

export function getLinkVariants(hasHover?: boolean) {
  return colorKeys.map((key) => ({
    color: key,
    variant: 'link',
    css: createLinkVariant(key, hasHover),
  }))
}

export const colors = {
  solid: getSolidVariants(),
  outlined: getOutlinedVariants(),
  ghost: getGhostVariants(),
  link: getLinkVariants(),
}

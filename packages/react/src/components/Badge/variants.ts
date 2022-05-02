import { colorKeys, ColorKeys, isBright } from '@fuel-js/css'

function createSolidVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const background = isBright(color) ? `$${color}6` : `$${color}9`
  const textColor = isBright(color) ? `$${color}12` : `$${color}1`

  return {
    background,
    color: textColor,
  }
}

function createOutlinedVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}11`
  const borderColor = `$${color}7`

  return {
    borderColor,
    background: 'transparent',
    color: textColor,
  }
}

function createGhostVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const background = `$${color}3`
  const textColor = `$${color}11`

  return {
    background,
    color: textColor,
    borderColor: 'transparent',
  }
}

export const colors = {
  solid: colorKeys.reduce(
    (obj, key: any) => ({ ...obj, [key]: createSolidVariant(key) }),
    {}
  ),
  outlined: colorKeys.map((key) => ({
    color: key,
    variant: 'outlined',
    css: createOutlinedVariant(key),
  })),
  ghost: colorKeys.map((key) => ({
    color: key,
    variant: 'ghost',
    css: createGhostVariant(key),
  })),
}

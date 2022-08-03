import type { ColorKeys } from '@fuel-ui/css';
import { colorKeys, isBright } from '@fuel-ui/css';

function createSolidVariant(keyColor: ColorKeys) {
  const color = String(keyColor);
  const background = isBright(color) ? `$${color}11` : `$${color}9`;
  const textColor = isBright(color) ? `$${color}3` : `$${color}1`;

  return {
    background,
    color: textColor,
  };
}

function createOutlinedVariant(keyColor: ColorKeys) {
  const color = String(keyColor);
  const textColor = `$${color}11`;
  const borderColor = `$${color}7`;

  return {
    borderColor,
    background: 'transparent',
    color: textColor,
  };
}

function createGhostVariant(keyColor: ColorKeys) {
  const color = String(keyColor);
  const background = `$${color}3`;
  const textColor = `$${color}11`;

  return {
    background,
    color: textColor,
    borderColor: 'transparent',
  };
}

export const colors = {
  solid: colorKeys.reduce(
    (obj, key: ColorKeys) => ({ ...obj, [key]: createSolidVariant(key) }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<ColorKeys, any>
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
};

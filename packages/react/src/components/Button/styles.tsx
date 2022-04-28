/// <reference types="@stitches/react" />

import { AllColorKeys, allColorKeys } from '@fuel/theme'
import tw, { css, theme } from 'twin.macro'
import Color from 'color'

function createSolidVariant(keyColor: AllColorKeys) {
  const color = String(keyColor)
  const background = theme()['colors'][`${color}500`]
  const borderColor = Color(background).darken(0.2).toString()
  return {
    boxShadow: `$sm`,
    fontWeight: '$semibold',
    borderColor: borderColor,
    background: `$${color}500`,
    color: `white`,
    '&:hover': {
      background: borderColor,
    },
  }
}

function createOutlinedVariant(keyColor: AllColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}600`
  const borderColor = `$${color}500`
  return {
    borderColor,
    background: 'transparent',
    color: textColor,
    '&:hover': {
      color: 'white',
      background: borderColor,
    },
  }
}

function createGhostVariant(keyColor: AllColorKeys) {
  const color = String(keyColor)
  const textColor = theme()['colors'][`${color}600`]
  const background = theme()['colors'][`${color}100`]
  const hover = Color(background).darken(0.05).saturate(0.2).toString()
  return {
    background,
    color: textColor,
    boxShadow: 'none',
    borderColor: 'transparent',
    '&:hover': {
      background: hover,
    },
  }
}

function createLinkVariant(keyColor: AllColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}600`
  return {
    ...tw`p-0 h-auto min-w-auto bg-transparent border-transparent border-none shadow-none`,
    ...tw`hover:(bg-transparent underline)`,
    color: textColor,
  }
}

export const button = css({
  ...tw`
    appearance-none inline-flex items-center justify-center
    border border-transparent rounded-lg transition-all
    focus:(z-0)
  `,

  variants: {
    size: {
      xs: {
        ...tw`gap-1 px-2 text-xs h-7 min-w-6`,
      },
      sm: {
        ...tw`gap-2 px-3 text-sm h-8 min-w-9`,
      },
      md: {
        ...tw`gap-2 px-4 text-base h-10 min-w-14`,
      },
      lg: {
        ...tw`gap-3 px-5 text-lg h-12 min-w-20`,
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
      link: tw`
        p-0 h-auto min-w-auto border-none shadow-none
        hover:(underline)
      `,
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
  ],

  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
  },
})

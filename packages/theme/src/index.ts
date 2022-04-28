import { createStitches } from './factories/createStitches'
export { default as cx } from 'classnames'

export * from './colors'
export * as tokens from './tokens'
export { createTailwindTheme } from './factories/createTailwindTheme'
export { createStitches }

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches()

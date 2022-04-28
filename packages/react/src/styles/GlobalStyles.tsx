import '@fontsource/inter/variable.css'

import { colors, globalCss } from '@fuel/css'
import { opinionated } from './normalize'

const customStyles = {
  body: {
    WebkitTapHighlightColor: colors.primary500,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
}

const styles = () => {
  globalCss(opinionated)()
  globalCss(customStyles)()
}

export const GlobalStyles = () => {
  styles()
  return null
}

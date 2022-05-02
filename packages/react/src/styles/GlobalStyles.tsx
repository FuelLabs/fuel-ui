import '@fontsource/inter/variable.css'
import '@fontsource/raleway/variable.css'

import { colors, globalCss } from '@fuel-js/css'
import { opinionated } from './normalize'

const customStyles = {
  body: {
    WebkitTapHighlightColor: colors.accent9,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
}

const styles = (theme: any) => {
  globalCss(theme, ...opinionated)()
  globalCss(theme, customStyles)()
}

export const GlobalStyles = ({ theme }: any) => {
  styles(theme)
  return null
}

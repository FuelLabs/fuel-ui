import '@fontsource/inter/variable.css'

import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss } from '../../stitches.config'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.primary500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<any, any>)()
}

export const GlobalStyles = () => {
  styles()
  return null
}

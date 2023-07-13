/* eslint-disable @typescript-eslint/no-explicit-any */
import { globalCss } from '@fuel-ui/css';

import { fontFaces } from './fonts';
import { opinionated } from './normalize';

const customStyles = {
  body: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    margin: '0',
    letterSpacing: '$tight',
    textSize: 'base' as any,
    color: '$textColor',
    background: '$bodyColor',
  },
};

const fontStyles = {
  body: {
    fontFamily: '$sans',
    letterSpacing: '$tight',
  },
  '@font-face': fontFaces,
};

function styles() {
  globalCss(opinionated)();
  globalCss(customStyles)();
}

function fonts() {
  globalCss(fontStyles)();
}

type GlobalStylesProps = {
  withFonts?: boolean;
};

export const GlobalStyles = ({ withFonts }: GlobalStylesProps) => {
  withFonts && fonts();
  styles();
  return null;
};

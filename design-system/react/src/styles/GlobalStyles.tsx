/* eslint-disable @typescript-eslint/no-explicit-any */
import { globalCss } from '@fuel-ui/css';

import { fontFaces } from './fonts';
import { opinionated } from './normalize';

const customStyles = {
  body: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    margin: '0',
    textSize: 'base' as any,
    color: '$textColor',
    background: '$bodyColor',
  },
  '*:focus': {
    outline: 'none',
  },
};

const fontStyles = {
  body: {
    fontFamily: '$sans',
    letterSpacing: '$normal',
  },
  '@font-face': fontFaces,
  '@import': [
    'url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap)',
  ],
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

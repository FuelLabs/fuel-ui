/* eslint-disable @typescript-eslint/no-explicit-any */
import { globalCss } from '@fuel-ui/css';

import { opinionated } from './normalize';

const customStyles = {
  body: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    margin: '0',
    letterSpacing: '0.01em',
    textSize: 'base' as any,
    color: '$textColor',
    background: '$bodyColor',
  },
};

function fontSource(fontName: string) {
  return `url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/${fontName}.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/${fontName}.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/${fontName}.eot') format('embedded-opentype')`;
}

const fontStyles = {
  body: {
    fontFamily: '$sans',
  },
  '@font-face': [
    {
      fontFamily: 'Inter',
      src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;700&display=swap')",
      fontWeight: '300 900',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'PxGrotesk',
      src: fontSource('Px-Grotesk-Light'),
      fontWeight: '100',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'PxGrotesk',
      src: fontSource('Px-Grotesk-Regular'),
      fontWeight: '400',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'PxGrotesk',
      src: fontSource('Px-Grotesk-Italic'),
      fontWeight: '400',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'PxGrotesk',
      src: fontSource('Px-Grotesk-Bold'),
      fontWeight: '600',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'PxGrotesk-Mono',
      src: fontSource('Px-Grotesk-Mono-Regular'),
      fontWeight: '400',
      fontStyle: 'normal',
    },
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
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  withFonts && fonts();
  styles();
  return null;
};

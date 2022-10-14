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

const fontStyles = {
  body: {
    fontFamily: '$sans',
  },
  '@font-face': [
    {
      fontFamily: 'Satoshi',
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-Variable.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-Variable.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-Variable.ttf') format('truetype')",
      fontWeight: '300 900',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Satoshi',
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-VariableItalic.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-VariableItalic.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-VariableItalic.ttf') format('truetype')",
      fontWeight: '300 900',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'GeneralSans',
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-Variable.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-Variable.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-Variable.ttf') format('truetype')",
      fontWeight: '300 900',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'GeneralSans',
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-VariableItalic.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-VariableItalic.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-VariableItalic.ttf') format('truetype')",
      fontWeight: '300 900',
      fontStyle: 'italic',
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { globalCss, tokens } from "@fuel-ui/css";

import { opinionated } from "./normalize";

const customStyles = {
  body: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    margin: "0",
    letterSpacing: 0,
    textSize: "base" as any,
    color: "$textColor",
    background: "$bodyColor",
  },
};

const fontStyles = {
  body: {
    fontFamily: tokens.fonts.sans,
    fontFeatureSettings: '"ss02" on, "ss01" on',
  },
  "@font-face": [
    {
      fontFamily: "UTL",
      src: 'url("https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/untitled-regular.woff2") format("woff2"), url("https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/untitled-regular.woff") format("woff")',
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      fontFamily: "UTL",
      src: 'url("https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/untitled-medium.woff2") format("woff2"), url("https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/untitled-medium.woff") format("woff")',
      fontWeight: 600,
      fontStyle: "normal",
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

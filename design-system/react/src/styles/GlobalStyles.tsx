/* eslint-disable @typescript-eslint/no-explicit-any */
import { globalCss, tokens } from "@fuels-ui/css";

import { opinionated } from "./normalize";

const customStyles = {
  body: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    margin: "0",
    letterSpacing: 0,
    fontFamily: tokens.fonts.sans,
    fontFeatureSettings: '"ss02" on, "ss01" on',
    textSize: "base" as any,
    color: "$textColor",
    background: "$bodyColor",
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

const styles = () => {
  globalCss(opinionated)();
  globalCss(customStyles)();
};

export const GlobalStyles = () => {
  styles();
  return null;
};

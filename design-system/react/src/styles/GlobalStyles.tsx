/* eslint-disable @typescript-eslint/no-explicit-any */
import { globalCss, tokens } from "@fuel-ui/css";

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
};

const styles = () => {
  globalCss(opinionated)();
  globalCss(customStyles)();
};

export const GlobalStyles = () => {
  styles();
  return null;
};

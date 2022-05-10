/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors, darkColors, globalCss, tokens } from "@fuel/css";

import type { FuelTheme } from "..";
import { useFuelTheme } from "..";

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
  },
};

function colorsByTheme(theme: FuelTheme) {
  return {
    body: {
      color: theme === "light" ? colors.textColor : darkColors.textColor,
      background: theme === "light" ? colors.bodyColor : darkColors.bodyColor,
    },
  };
}

const styles = (theme: FuelTheme) => {
  globalCss(opinionated)();
  globalCss(customStyles)();
  globalCss(colorsByTheme(theme))();
};

export const GlobalStyles = () => {
  const { theme: fuelTheme } = useFuelTheme();
  styles(fuelTheme);
  return null;
};

import { theme as lightTheme, darkTheme } from "@fuel/css";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { FC, ReactElement } from "react";
import { useEffect } from "react";

import { GlobalStyles } from "../../styles/GlobalStyles";

export type FuelTheme = "light" | "dark";

const themeAtom = atomWithStorage<FuelTheme>("fuel-theme", "light");

export const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add(
      theme === "dark" ? darkTheme.className : lightTheme.className
    );
    html.classList.remove(
      theme === "light" ? darkTheme.className : lightTheme.className
    );
  }, [theme]);

  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export function useFuelTheme() {
  const [theme, set] = useAtom(themeAtom);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    set(next);
  }

  function setTheme(next: FuelTheme) {
    set(next);
  }

  return { theme, toggleTheme, setTheme };
}

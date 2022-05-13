import { theme as lightTheme, darkTheme } from "@fuels-ui/css";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { FC, ReactElement } from "react";
import { useEffect } from "react";

import { GlobalStyles } from "../../styles/GlobalStyles";

export type FuelTheme = "light" | "dark";

const themeAtom = atomWithStorage<FuelTheme>(
  "fuel-theme",
  getDefaultSystemTheme()
);

function getDefaultSystemTheme() {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
}

export const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add(
      theme === "dark" ? darkTheme.className : lightTheme.className
    );
    html.classList.remove(
      theme === "light" ? darkTheme.className : lightTheme.className
    );
  }, [theme]);

  useEffect(() => {
    function callback(event: MediaQueryListEvent) {
      setTheme(event.matches ? "dark" : "light");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", callback);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", callback);
    };
  }, []);

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

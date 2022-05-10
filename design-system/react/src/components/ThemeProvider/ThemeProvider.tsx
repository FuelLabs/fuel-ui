import { theme as lightTheme, darkTheme } from "@fuel/css";
import type { FC, ReactElement } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

import { GlobalStyles } from "../../styles/GlobalStyles";

export type Theme = "light" | "dark";
interface ThemeContext {
  theme: Theme;
  toggle: () => void;
}

const ctx = createContext<ThemeContext>({
  theme: "light",
  toggle: () => null,
});

export const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [, setLocalStorage] = useLocalStorage("fuel-theme");

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setLocalStorage(next);
    setTheme(next);
  }

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
      <ctx.Provider value={{ theme, toggle }}>{children}</ctx.Provider>
    </>
  );
};

export function useFuelTheme() {
  return useContext(ctx);
}

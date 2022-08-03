import { useMachine } from "@xstate/react";
import type { FC, ReactNode } from "react";
import { useContext, createContext } from "react";

import { GlobalStyles } from "../../styles/GlobalStyles";
import { ToastProvider } from "../Toast";

import type { FuelTheme } from "./machine";
import { getDefaultSystemTheme, themeProviderMachine } from "./machine";

type ThemeProviderContext = {
  theme: FuelTheme;
  setTheme: (theme: FuelTheme) => void;
  toggleTheme: () => void;
};

const context = createContext<ThemeProviderContext>({
  theme: getDefaultSystemTheme(),
  setTheme: () => null,
  toggleTheme: () => null,
});

export type ThemeProps = {
  theme?: "dark" | "light";
  withFonts?: boolean;
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProps> = ({
  children,
  withFonts = true,
  theme: defaultTheme,
}) => {
  const [state, send] = useMachine(() =>
    defaultTheme
      ? themeProviderMachine.withContext({ theme: defaultTheme })
      : themeProviderMachine
  );

  function setTheme(value: FuelTheme) {
    send("SET_THEME", { value });
  }

  function toggleTheme() {
    send("TOGGLE_THEME");
  }

  const contextValue = {
    setTheme,
    toggleTheme,
    theme: state.context.theme,
  };

  return (
    <context.Provider value={contextValue}>
      <ToastProvider />
      <GlobalStyles withFonts={withFonts} />
      {children}
    </context.Provider>
  );
};

export function useFuelTheme() {
  return useContext(context);
}

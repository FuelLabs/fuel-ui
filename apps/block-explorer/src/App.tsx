import "@fontsource/inter/variable.css";
import "@fontsource/raleway/variable.css";

import { ThemeProvider } from "@fuel/react";
import { StrictMode } from "react";

import { routes } from "./routes";

export function App() {
  return (
    <StrictMode>
      <ThemeProvider>{routes}</ThemeProvider>
    </StrictMode>
  );
}

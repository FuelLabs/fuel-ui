import "@fontsource/inter/variable.css";
import "@fontsource/raleway/variable.css";

import { ThemeProvider } from "@fuels-ui/react";
import { StrictMode } from "react";
import { QueryClientProvider } from "react-query";

import { routes } from "./routes";
import { queryClient } from "./queryClient";

export function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{routes}</ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

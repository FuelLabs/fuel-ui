import "@fontsource/inter/variable.css";
import "@fontsource/raleway/variable.css";

import { ThemeProvider } from "@fuel/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

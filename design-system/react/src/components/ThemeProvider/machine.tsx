import { lightTheme, darkTheme } from "@fuel-ui/css";
import { assign, createMachine } from "xstate";

export type FuelTheme = "light" | "dark" | typeof lightTheme;

const LOCALSTORAGE_KEY = "fuel-theme";
const DEFAULT_THEME = "dark";

export function getDefaultSystemTheme(): FuelTheme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
}

type MachineContext = {
  theme: FuelTheme;
};

type MachineEvents =
  | { type: "SET_THEME"; value: FuelTheme }
  | { type: "TOGGLE" };

const machine = createMachine<MachineContext>({
  schema: {
    context: {} as MachineContext,
    events: {} as MachineEvents,
  },
  id: "themeProvider",
  initial: "idle",
  states: {
    idle: {
      entry: ["setDefaultTheme", "addDocumentClass"],
      on: {
        SET_THEME: {
          actions: ["setTheme", "addDocumentClass"],
        },
        TOGGLE_THEME: {
          actions: ["toggleTheme", "addDocumentClass"],
        },
      },
      invoke: {
        src: () => (send) => {
          function callback(event: MediaQueryListEvent) {
            send({
              type: "SET_THEME",
              value: event.matches ? "dark" : "light",
            });
          }

          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", callback);

          return () => {
            window
              .matchMedia("(prefers-color-scheme: dark)")
              .removeEventListener("change", callback);
          };
        },
      },
    },
  },
});

export const themeProviderMachine = machine.withConfig({
  actions: {
    setDefaultTheme: assign({
      theme: (ctx) => {
        if (typeof window === "undefined") return DEFAULT_THEME;
        const theme = localStorage.getItem(LOCALSTORAGE_KEY) as FuelTheme;
        return ctx.theme || theme || getDefaultSystemTheme();
      },
    }),
    setTheme: assign({
      theme: (_, ev) => ev.value,
    }),
    toggleTheme: assign({
      theme: (ctx) => {
        if (ctx.theme !== "dark" && ctx.theme !== "light") return ctx.theme;
        return ctx.theme === "dark" ? "light" : "dark";
      },
    }),
    addDocumentClass: ({ theme }) => {
      const html = document.documentElement;

      if (theme !== "dark" && theme !== "light") {
        html.classList.add(theme.className);
        return;
      }

      html.classList.remove(
        theme === "light" ? darkTheme.className : lightTheme.className
      );
      html.classList.add(
        theme === "dark" ? darkTheme.className : lightTheme.className
      );
    },
  },
});

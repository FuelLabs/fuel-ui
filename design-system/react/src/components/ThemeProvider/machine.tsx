import type { createTheme } from '@fuel-ui/css';
import { assign, createMachine } from 'xstate';

export type FuelTheme = ReturnType<typeof createTheme>;
export type ThemesObj = Record<string, FuelTheme>;

const STORAGE_KEY = 'fuel-ui-theme';
export function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const theme = localStorage.getItem(STORAGE_KEY);
  if (theme) return theme;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

type MachineContext = {
  themes: ThemesObj;
  current: string;
};

type MachineEvents = {
  type: 'SET_THEME';
  value: string;
};

const machine = createMachine<MachineContext>({
  predictableActionArguments: true,
  schema: {
    context: {} as MachineContext,
    events: {} as MachineEvents,
  },
  id: 'themeProvider',
  initial: 'idle',
  entry: ['saveOnLocalStorage', 'addDocumentClass'],
  states: {
    idle: {
      on: {
        SET_THEME: {
          actions: ['setTheme', 'addDocumentClass'],
        },
      },
    },
  },
});

export const themeProviderMachine = machine.withConfig({
  actions: {
    saveOnLocalStorage: ({ current }) => {
      localStorage.setItem(STORAGE_KEY, current);
    },
    setTheme: assign({
      current: (_, ev) => {
        localStorage.setItem(STORAGE_KEY, ev.value);
        return ev.value;
      },
    }),
    addDocumentClass: ({ themes, current }) => {
      const selected = themes[current];
      const html = document.documentElement;
      html.classList.toggle(selected.className, true);
    },
  },
});

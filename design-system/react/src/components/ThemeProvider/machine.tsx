/* eslint-disable @typescript-eslint/no-explicit-any */
import { assign, createMachine } from 'xstate';
import { useStore } from '~/hooks/useStore';
import type { ThemesObj } from '~/hooks/useTheme';
import { THEME_STORAGE_KEY } from '~/hooks/useTheme';
import { mergeDeep } from '~/utils/helpers';

type MachineContext = {
  themes: ThemesObj;
  current: string;
  old: string;
};

type MachineEvents = {
  type: 'SET_THEME';
  value: string;
};

const machine = createMachine({
  predictableActionArguments: true,
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  tsTypes: {} as import('./machine.typegen').Typegen0,
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
    saveOnLocalStorage: ({ current, themes }) => {
      localStorage.setItem(THEME_STORAGE_KEY, current);
      const components = themes[current]?.components || {};
      const store = useStore.getState();
      Object.entries(components ?? {}).forEach(([key, value]) => {
        const curr = store.defs[key];
        const next = mergeDeep(curr, value);
        store.addDef(key as any, next);
      });
    },
    setTheme: assign((ctx, ev) => {
      localStorage.setItem(THEME_STORAGE_KEY, ev.value);
      return {
        ...ctx,
        old: ctx.current,
        current: ev.value,
      };
    }),
    addDocumentClass: ({ themes, current, old }) => {
      const selected = themes[current];
      const oldClassName = themes[old];

      if (!selected || !oldClassName) {
        throw new Error('Theme does not exist');
      }

      const html = document.documentElement;
      html.classList.remove(oldClassName.theme.toString());
      html.classList.add(selected.theme.toString());
    },
  },
});

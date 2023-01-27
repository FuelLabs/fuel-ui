/* eslint-disable @typescript-eslint/consistent-type-imports */
import { assign, createMachine, InterpreterFrom, StateFrom } from 'xstate';

import { generatePages } from './helpers';

export type MachineContext = {
  pagesCount: number;
  currentPage?: number;
  pagesToDisplay?: number;
  pages?: number[];
};

export type MachineEvents =
  | { type: 'NEXT'; input?: unknown }
  | { type: 'PREV'; input?: unknown }
  | { type: 'GOTO'; input: number };

export const paginationMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./paginationMachine.typegen').Typegen0,
    schema: {
      context: {} as MachineContext,
      events: {} as MachineEvents,
    },
    id: '(machine)',
    initial: 'generatePages',
    states: {
      idle: {
        on: {
          GOTO: {
            target: 'generatePages',
            actions: ['goToPage'],
          },
          NEXT: {
            target: 'generatePages',
            actions: ['nextPage'],
          },
          PREV: {
            target: 'generatePages',
            actions: ['prevPage'],
          },
        },
      },
      generatePages: {
        entry: ['generatePages', 'onPageChange'],
        always: 'idle',
      },
    },
  },
  {
    actions: {
      goToPage: assign({
        currentPage: (_context, event) => event.input,
      }),
      nextPage: assign({
        currentPage: ({ currentPage = 1, pagesCount }) => {
          return currentPage >= pagesCount ? 1 : currentPage + 1;
        },
      }),
      prevPage: assign({
        currentPage: (ctx) => {
          const currentPage = ctx.currentPage || 1;
          return currentPage === 1 ? 100 : currentPage - 1;
        },
      }),
      generatePages: assign({
        pages: (context) =>
          generatePages({
            ...context,
            currentPage: context.currentPage || 1,
          }),
      }),
    },
  }
);

export type PaginationMachine = typeof paginationMachine;
export type PaginationMachineState = StateFrom<PaginationMachine>;
export type PaginationMachineService = InterpreterFrom<PaginationMachine>;

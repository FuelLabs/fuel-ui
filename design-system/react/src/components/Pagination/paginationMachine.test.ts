import { interpret } from 'xstate';

import type {
  PaginationMachineService,
  PaginationMachineState,
} from './paginationMachine';
import { paginationMachine } from './paginationMachine';

describe('paginationMachine', () => {
  let service: PaginationMachineService;
  let state: PaginationMachineState;

  beforeEach(() => {
    const machine = paginationMachine.withContext({
      pages: [],
      pagesCount: 100,
      currentPage: 5,
    });

    service = interpret(machine);
    service.start();
    state = service.getSnapshot();
  });

  afterEach(() => {
    service.stop();
  });

  it('should be in idle state correctly', () => {
    expect(state.matches('idle')).toBe(true);
    expect(state.context.currentPage).toBe(5);
    expect(state.context.pages).toEqual([1, -1, 4, 5, 6, -1, 100]);
  });

  it('should be in idle state correctly when currentPage is 1', () => {
    service.send('GOTO', { input: 1 });
    state = service.getSnapshot();

    expect(state.matches('idle')).toBe(true);
    expect(state.context.currentPage).toBe(1);
    expect(state.context.pages).toEqual([1, 2, 3, -1, 100]);
  });

  it('should be in idle state correctly when currentPage is 100', () => {
    service.send('GOTO', { input: 100 });
    state = service.getSnapshot();

    expect(state.matches('idle')).toBe(true);
    expect(state.context.currentPage).toBe(100);
    expect(state.context.pages).toEqual([1, -1, 98, 99, 100]);
  });

  it('should go back if current is 100 and set next', () => {
    service.send('GOTO', { input: 100 });
    service.send('NEXT');
    state = service.getSnapshot();

    expect(state.matches('idle')).toBe(true);
    expect(state.context.currentPage).toBe(1);
    expect(state.context.pages).toEqual([1, 2, 3, -1, 100]);
  });

  it('should go to end if current is 1 and set previous', () => {
    service.send('GOTO', { input: 1 });
    service.send('PREV');
    state = service.getSnapshot();

    expect(state.matches('idle')).toBe(true);
    expect(state.context.currentPage).toBe(100);
    expect(state.context.pages).toEqual([1, -1, 98, 99, 100]);
  });
});

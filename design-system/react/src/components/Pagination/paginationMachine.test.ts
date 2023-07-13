import { interpret } from "xstate"
import { waitFor } from "xstate/lib/waitFor"

import type { PaginationMachineService } from "./paginationMachine"
import { paginationMachine } from "./paginationMachine"

describe("paginationMachine", () => {
  let service: PaginationMachineService
  const onPageChange = jest.fn()

  beforeEach(async () => {
    const machine = paginationMachine
      .withContext({
        pages: [],
        pagesCount: 100,
        currentPage: 1,
        pagesToDisplay: 6,
      })
      .withConfig({
        actions: {
          onPageChange,
        },
      })

    service = interpret(machine).start()
    await waitFor(service, (state) => state.matches("idle"))
  })

  afterEach(() => {
    service.stop()
  })

  it("should be in idle state correctly when currentPage is 1", () => {
    service.send("GOTO", { input: 1 })
    const state = service.getSnapshot()

    expect(state.matches("idle")).toBe(true)
    expect(state.context.currentPage).toBe(1)
    expect(state.context.pages).toEqual([1, 2, 3, 4, -1, 100])
  })

  it("should be in idle state correctly when currentPage is 100", () => {
    service.send("GOTO", { input: 100 })
    const state = service.getSnapshot()

    expect(state.matches("idle")).toBe(true)
    expect(state.context.currentPage).toBe(100)
    expect(state.context.pages).toEqual([1, -1, 97, 98, 99, 100])
  })

  it("should go back if current is 100 and set next", () => {
    service.send("GOTO", { input: 100 })
    service.send("NEXT")
    const state = service.getSnapshot()

    expect(state.matches("idle")).toBe(true)
    expect(state.context.currentPage).toBe(1)
    expect(state.context.pages).toEqual([1, 2, 3, 4, -1, 100])
  })

  it("should go to end if current is 1 and set previous", () => {
    service.send("GOTO", { input: 1 })
    service.send("PREV")
    const state = service.getSnapshot()

    expect(state.matches("idle")).toBe(true)
    expect(state.context.currentPage).toBe(100)
    expect(state.context.pages).toEqual([1, -1, 97, 98, 99, 100])
  })
})

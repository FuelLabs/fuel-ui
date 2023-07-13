import { omit } from "./helpers"

describe("omit()", () => {
  it("should omit props of an object", () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(omit(["a"], obj)).toEqual({ b: 2, c: 3 })
  })
})

import { createStitches } from "../src/index.js"

describe("Utils", () => {
  test("Authors can define utilties applied to components", () => {
    const stitches = createStitches({
      utils: {
        bg: (value) => ({ backgroundColor: value }),
      },
    })

    const component = stitches.css({
      bg: "red",
    })

    expect(stitches.toString()).toBe("")

    component.toString()

    expect(stitches.toString()).toBe(
      `--sxs{--sxs:2 fuel_bzwKCF}@media{.fuel_bzwKCF{background-color:red}}`,
    )
  })
})

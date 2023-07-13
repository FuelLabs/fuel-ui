import { createStitches } from "../src/index.js"

describe("Component: Utilities & Tokens", () => {
  test("Utilities & Tokens of the same type", () => {
    const { css, toString } = createStitches({
      utils: {
        px: (value) => ({
          paddingLeft: value,
          paddingRight: value,
        }),
      },
    })

    css({
      px: 15,
    })()

    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_ccgTVz}@media{.fuel_ccgTVz{padding-left:15px;padding-right:15px}}`,
    )
  })

  test("Utilities & Tokens of different types", () => {
    const { css, toString } = createStitches({
      utils: {
        ftw: (value) => ({
          color: value,
          paddingLeft: value,
          paddingRight: value,
        }),
      },
    })

    css({
      ftw: "$sp",
    })()

    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_ilqzId}@media{.fuel_ilqzId{color:var(--colors-sp);padding-left:var(--space-sp);padding-right:var(--space-sp)}}`,
    )
  })
})

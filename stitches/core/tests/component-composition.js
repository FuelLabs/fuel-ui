import { createStitches } from "../src/index.js"

describe("Composition", () => {
  test("Renders an empty component", () => {
    const { css, toString } = createStitches()
    const generic = css()

    expect(generic().props).toEqual({ className: "PJLV" })
    expect(toString()).toBe("")
  })

  test("Renders a component as the final composition by default", () => {
    const { css, toString } = createStitches()
    const red = css({ color: "red" })
    const size14 = css({ fontSize: "14px" })
    const bold = css({ fontWeight: "bold" })
    const title = css(red, size14, bold, { fontFamily: "monospace" })

    expect(title.className).toBe("fuel_gmqXFB")
    expect(toString()).toBe("")
    expect(String(title)).toBe("fuel_gmqXFB")
    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_gmqXFB fuel_hzkWus fuel_cQFdVt fuel_kngyIZ}@media{` +
        `.fuel_gmqXFB{color:red}` +
        `.fuel_hzkWus{font-size:14px}` +
        `.fuel_cQFdVt{font-weight:bold}` +
        `.fuel_kngyIZ{font-family:monospace}` +
        `}`,
    )
  })

  test("Renders a component with all compositions", () => {
    const { css, toString } = createStitches()
    const red = css({ color: "red" })
    const size14 = css({ fontSize: "14px" })
    const bold = css({ fontWeight: "bold" })
    const title = css(red, size14, bold, { fontFamily: "monospace" })

    expect(title().className).toBe(
      "fuel_gmqXFB fuel_hzkWus fuel_cQFdVt fuel_kngyIZ",
    )
    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_gmqXFB fuel_hzkWus fuel_cQFdVt fuel_kngyIZ}@media{` +
        `.fuel_gmqXFB{color:red}` +
        `.fuel_hzkWus{font-size:14px}` +
        `.fuel_cQFdVt{font-weight:bold}` +
        `.fuel_kngyIZ{font-family:monospace}` +
        `}`,
    )
  })
})

import * as React from "react"
import * as renderer from "react-test-renderer"
import { createStitches } from "../src/index.js"

describe("Issue #416: Composition versus Descendancy", () => {
  {
    const { styled, getCssText } = createStitches()

    const BoxA = styled("main", {
      variants: {
        foo: {
          bar: {
            "--box-a": "foo-bar",
          },
        },
      },
    })

    const BoxB = styled(BoxA, {
      variants: {
        foo: {
          bar: {
            "--box-b": "foo-bar",
          },
        },
      },
    })

    const GenY = (props) => {
      return React.createElement(BoxB, props)
    }

    const BoxZ = styled(GenY, {
      variants: {
        foo: {
          bar: {
            "--box-z": "foo-bar",
          },
        },
      },
    })

    const App = () => {
      return React.createElement(
        "div",
        null,
        // children
        React.createElement(BoxA, { foo: "bar" }),
        React.createElement(BoxB, { foo: "bar" }),
        React.createElement(GenY, { foo: "bar" }),
        React.createElement(BoxZ, { foo: "bar" }),
      )
    }

    let wrapper
    test("it can render without errors", () => {
      renderer.act(() => {
        wrapper = renderer.create(React.createElement(App))
      })
    })

    const [boxA, boxB, genY, boxZ] = wrapper.toJSON().children

    const baselineClass = `fuel_PJLV`
    const variantAClass = `fuel_PJLV-kgptgY-foo-bar`
    const variantBClass = `fuel_PJLV-cHNUhn-foo-bar`
    const variantZClass = `fuel_PJLV-vFFMz-foo-bar`

    test("Box A has an active variant", () =>
      expect(boxA.props.className).toBe(`${baselineClass} ${variantAClass}`))

    test("Box B has an active variant, plus the active variant of Box A", () =>
      expect(boxB.props.className).toBe(
        `${baselineClass} ${variantAClass} ${variantBClass}`,
      ))

    test("Gen Y has no variant, but activates the variants of Box A and Box B", () =>
      expect(genY.props.className).toBe(
        `${baselineClass} ${variantAClass} ${variantBClass}`,
      ))

    test("Box Z has an active variant, but does not activate the variants of Box A or Box B", () =>
      expect(boxZ.props.className).toBe(`${baselineClass} ${variantZClass}`))

    test("All variant CSS is generated", () =>
      expect(getCssText()).toBe(
        `--sxs{--sxs:3 fuel_PJLV-kgptgY-foo-bar fuel_PJLV-cHNUhn-foo-bar fuel_PJLV-vFFMz-foo-bar}@media{` +
          `.fuel_PJLV-kgptgY-foo-bar{--box-a:foo-bar}` +
          `.fuel_PJLV-cHNUhn-foo-bar{--box-b:foo-bar}` +
          `.fuel_PJLV-vFFMz-foo-bar{--box-z:foo-bar}` +
          `}`,
      ))
  }
})

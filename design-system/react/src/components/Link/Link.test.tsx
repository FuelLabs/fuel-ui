import { testA11y, render, screen } from "@fuels/jest"

import { Link } from "./Link"

describe("Link", () => {
  it("a11y", async () => {
    await testA11y(<Link href="https://fuel.sh">Click</Link>)
  })

  it("should render a basic link component", () => {
    const { container } = render(<Link href="https://fuel.sh">Click</Link>)
    expect(container.querySelector("a")).toBeInTheDocument()
    expect(screen.getByRole("link")).toBeInTheDocument()
  })

  it("should add an external icon when isExternal prop is passed", () => {
    const { container } = render(
      <Link href="https://fuel.sh" isExternal>
        Click
      </Link>,
    )

    expect(container.querySelector("a")).toBeInTheDocument()
    expect(container.querySelector("svg")).toBeInTheDocument()
    expect(screen.getByRole("link")).toBeInTheDocument()
  })
})

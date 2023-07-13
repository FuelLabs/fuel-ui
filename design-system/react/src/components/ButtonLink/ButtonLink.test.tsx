import { render, screen, testA11y } from "@fuels/jest"

import { ButtonLink } from "./ButtonLink"

describe("ButtonLink", () => {
  it("a11y", async () => {
    await testA11y(<ButtonLink>Click</ButtonLink>)
  })

  it("should render <a> element", () => {
    const { container } = render(<ButtonLink>Click</ButtonLink>)
    expect(container.querySelector("a")).toBeInTheDocument()
    expect(screen.getByRole("link")).toBeInTheDocument()
  })
})

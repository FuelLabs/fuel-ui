import { render, testA11y, screen } from "@fuels/jest"

import { Icon } from "../Icon"

import type { ListProps } from "."
import { List } from "./List"

const Content = (props: ListProps) => (
  <List {...props}>
    <List.Item>First item</List.Item>
    <List.Item>Second item</List.Item>
    <List.Item>Third item</List.Item>
  </List>
)

describe("List", () => {
  it("a11y", async () => {
    await testA11y(<Content />)
  })

  it("should render list correctly", async () => {
    render(<Content />)
    expect(screen.getByText("First item")).toBeInTheDocument()
    expect(screen.getByText("Second item")).toBeInTheDocument()
    expect(screen.getByText("Third item")).toBeInTheDocument()
  })

  it("should render list with icon", async () => {
    render(<Content icon={Icon.is("Check")} iconAriaLabel="Icon Test" />)
    const items = await screen.findAllByLabelText(/icon test/i)
    expect(items.length).toBe(3)
  })
})

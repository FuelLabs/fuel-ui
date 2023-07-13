import { render, testA11y, screen, waitFor, act } from "@fuels/jest"

import { Button } from "../Button"
import { Icon } from "../Icon"

import type { DropdownProps } from "./Dropdown"
import { Dropdown } from "./Dropdown"

const Content = (props: Partial<DropdownProps>) => {
  return (
    <Dropdown {...props}>
      <Dropdown.Trigger>
        <Button>Click here</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu autoFocus disabledKeys={["edit"]} aria-label="Actions">
        <Dropdown.MenuItem key="settings" textValue="Settings">
          <Icon icon="Settings" />
          Settings
        </Dropdown.MenuItem>
        <Dropdown.MenuItem key="trash" textValue="Delete">
          <Icon icon="Trash" />
          Delete
        </Dropdown.MenuItem>
        <Dropdown.MenuItem key="edit" textValue="Edit">
          <Icon icon="Edit" />
          Edit
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}

describe("Dropdown", () => {
  it("a11y", async () => {
    await testA11y(<Content />)
  })

  it("should open dropdown menu when click on trigger", async () => {
    const { user } = render(<Content />)

    expect(() => screen.getByText("Settings")).toThrow()
    const trigger = screen.getByText("Click here")
    await act(() => user.click(trigger))

    expect(await screen.findByText("Settings")).toBeInTheDocument()
  })

  it("should close when click on menu item", async () => {
    const { user } = render(<Content />)

    const trigger = screen.getByText("Click here")
    await act(() => user.click(trigger))

    const menuItem = await screen.findByText("Settings")
    await act(() => user.click(menuItem))

    await waitFor(() => expect(() => screen.getByText("Settings")).toThrow())
  })

  it("should close when click outside", async () => {
    const { user } = render(
      <>
        <Content />
        <Button>Foo</Button>
      </>,
    )

    const trigger = screen.getByText("Click here")
    await act(() => user.click(trigger))

    const fooBtn = await screen.findByText("Foo")
    await act(() => user.click(fooBtn))

    await waitFor(() => expect(() => screen.getByText("Settings")).toThrow())
  })

  it("should close when press esc", async () => {
    const { user } = render(<Content />)

    const trigger = screen.getByText("Click here")
    await act(() => user.click(trigger))
    await user.press("Esc")
    await waitFor(() => expect(() => screen.getByText("Settings")).toThrow())
  })
})

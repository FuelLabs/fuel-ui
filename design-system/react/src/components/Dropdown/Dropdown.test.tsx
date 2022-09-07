import { render, testA11y, screen, waitFor } from "@fuel-ui/test-utils";

import { Button } from "../Button";

import { Content } from "./Dropdown.stories";

describe("Dropdown", () => {
  it("a11y", async () => {
    await testA11y(<Content />);
  });

  it("should open dropdown menu when click on trigger", async () => {
    const { user } = render(<Content />);

    expect(() => screen.getByText("Settings")).toThrow();
    const trigger = screen.getByText("Click here");
    await user.click(trigger);
    expect(await screen.findByText("Settings")).toBeInTheDocument();
  });

  it("should close when click on menu item", async () => {
    const { user } = render(<Content />);

    const trigger = screen.getByText("Click here");
    await user.click(trigger);

    const menuItem = await screen.findByText(/settings/i);
    await user.click(menuItem);

    await waitFor(() => expect(() => screen.getByText("Settings")).toThrow());
  });

  it("should close when click outside", async () => {
    const { user } = render(
      <>
        <Content />
        <Button>Foo</Button>
      </>
    );

    const trigger = screen.getByText("Click here");
    await user.click(trigger);

    const fooBtn = await screen.findByText("Foo");
    await user.click(fooBtn);

    await waitFor(() => expect(() => screen.getByText("Settings")).toThrow());
  });

  it("should close when press esc", async () => {
    const { user } = render(<Content />);

    const trigger = screen.getByText("Click here");
    await user.click(trigger);
    await user.press("Esc");
    await waitFor(() => expect(() => screen.getByText("Settings")).toThrow());
  });
});

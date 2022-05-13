import { testA11y, render, screen } from "@fuels-ui/test-utils";

import { Heading } from "./Heading";

describe("Heading", () => {
  it("a11y", async () => {
    await testA11y(<Heading>Title</Heading>);
  });

  it("should render a heading element", () => {
    const { container } = render(<Heading>Title</Heading>);
    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should change heading element using as", () => {
    const { container } = render(<Heading as="h1">Title</Heading>);
    expect(container.querySelector("h1")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});

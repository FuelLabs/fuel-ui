import { render, screen } from "@testing-library/react";

import { Heading } from "./Heading";

describe("Heading", () => {
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

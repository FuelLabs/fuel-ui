import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  it("should render a basic div", () => {
    const { container } = render(<Box>Text</Box>);
    expect(container.querySelector("div")).toBeInTheDocument();
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should change element with as prop", async () => {
    const { container } = render(<Box as="article">Text</Box>);
    expect(container.querySelector("article")).toBeInTheDocument();
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("should render a span with inner text as Label", () => {
    const { container } = render(<Badge>Label</Badge>);
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("should change element with as prop", async () => {
    const { container } = render(<Badge as="div">Label</Badge>);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});

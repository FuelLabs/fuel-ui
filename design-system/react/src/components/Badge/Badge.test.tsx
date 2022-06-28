import { render, screen, testA11y } from "@test-changeset/test-utils";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("a11y", async () => {
    await testA11y(<Badge>Label</Badge>);
  });

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

import { render, screen } from "@testing-library/react";

import { ButtonLink } from "./ButtonLink";

describe("ButtonLink", () => {
  it("should render <a> element", () => {
    const { container } = render(<ButtonLink>Click</ButtonLink>);
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Click" })).toBeInTheDocument();
  });
});

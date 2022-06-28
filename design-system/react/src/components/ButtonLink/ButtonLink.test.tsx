import { render, screen, testA11y } from "@test-changeset/test-utils";

import { ButtonLink } from "./ButtonLink";

describe("ButtonLink", () => {
  it("a11y", async () => {
    await testA11y(<ButtonLink>Click</ButtonLink>);
  });

  it("should render <a> element", () => {
    const { container } = render(<ButtonLink>Click</ButtonLink>);
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

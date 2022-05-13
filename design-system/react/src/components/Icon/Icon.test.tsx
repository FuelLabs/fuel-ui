import { testA11y, render, screen } from "@fuel/test-utils";

import { Icon } from "./Icon";

describe("Icon", () => {
  it("a11y", async () => {
    await testA11y(<Icon icon="TrashIcon" label="Delete Icon" />);
  });

  it("should render a basic icon component", () => {
    const { container } = render(<Icon icon="TrashIcon" label="Delete Icon" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
  });
});

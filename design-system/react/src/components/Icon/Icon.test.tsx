import { testA11y, render, screen } from "@fuels-ui/test-utils";

import { Icon } from "./Icon";

describe("Icon", () => {
  it("a11y", async () => {
    await testA11y(<Icon icon="TrashIcon" label="Delete Icon" />);
  });

  it("should render a basic icon component", () => {
    const { container } = render(<Icon icon="TrashIcon" label="Delete" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});

import { testA11y, render, screen } from "@fuel/test-utils";
import { FiBox } from "react-icons/fi";

import { Icon } from "./Icon";

describe("Icon", () => {
  it("a11y", async () => {
    await testA11y(<Icon aria-label="Delete" icon="BiTrash" />);
  });

  it("should render a basic icon component", () => {
    const { container } = render(<Icon aria-label="Delete" icon="BiTrash" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
  });

  it("should render an arbitraty icon as react element", async () => {
    const { container } = render(<Icon aria-label="Delete" icon={FiBox} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
  });
});

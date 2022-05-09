import { render, screen } from "@testing-library/react";

import { Text } from "./Text";

describe("Text", () => {
  it("should render a basic paragraph", () => {
    const { container } = render(<Text>Click</Text>);
    expect(container.querySelector("p")).toBeInTheDocument();
  });

  it("should render with an icon on left", () => {
    const { container } = render(
      <Text leftIcon="BiTrash" leftIconAriaLabel="delete">
        Text
      </Text>
    );
    expect(container.querySelector("p")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });

  it("should render with an icon on right", () => {
    const { container } = render(
      <Text rightIcon="BiTrash" rightIconAriaLabel="delete">
        Text
      </Text>
    );
    expect(container.querySelector("p")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });
});

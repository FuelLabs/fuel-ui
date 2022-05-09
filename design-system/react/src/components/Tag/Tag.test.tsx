import { render, screen } from "@testing-library/react";
import { FaCalendar } from "react-icons/fa";

import { Tag } from "./Tag";

describe("Tag", () => {
  it("should render a basic tag", () => {
    const { container } = render(<Tag>Text</Tag>);
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("should render with an icon on left", () => {
    const { container } = render(
      <Tag leftIcon="BiTrash" leftIconAriaLabel="delete">
        Text
      </Tag>
    );
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });

  it("should render with an icon on right", () => {
    const { container } = render(
      <Tag rightIcon="BiTrash" rightIconAriaLabel="delete">
        Text
      </Tag>
    );
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });

  it("should render with a close button", () => {
    const { container } = render(
      <Tag>
        Text <Tag.CloseButton />
      </Tag>
    );
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("should render with an arbitraty icon component", () => {
    const { container } = render(
      <Tag leftIcon={FaCalendar} leftIconAriaLabel="calendar">
        Text
      </Tag>
    );
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(screen.getByLabelText("calendar")).toBeInTheDocument();
  });

  it("should not render a right icon if has a close button", () => {
    const { container } = render(
      <Tag
        leftIcon="BiCalendar"
        rightIcon="BiTrash"
        leftIconAriaLabel="calendar"
        rightIconAriaLabel="delete"
      >
        Text <Tag.CloseButton />
      </Tag>
    );

    expect(container.querySelector("span")).toBeInTheDocument();
    expect(container.querySelector("button")).toBeInTheDocument();
    expect(screen.getByLabelText("calendar")).toBeInTheDocument();
    expect(() => screen.getByLabelText("delete")).toThrow();
  });
});

import { press, render, screen, testA11y } from "@fuel/test-utils";
import { FaCalendar } from "react-icons/fa";

import { Tag } from "./Tag";

describe("Tag", () => {
  it("a11y", async () => {
    await testA11y(<Tag>Text</Tag>);
  });

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

  it("should focus on button close on tab", async () => {
    render(
      <Tag>
        Text <Tag.CloseButton />
      </Tag>
    );

    expect(screen.getByRole("button")).not.toHaveFocus();
    await press.Tab();
    expect(screen.getByRole("button")).toHaveFocus();
  });
});

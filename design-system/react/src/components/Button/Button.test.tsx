import { render, screen } from "@testing-library/react";
import { FaCalendar } from "react-icons/fa";

import { Button } from "./Button";

describe("Button", () => {
  it("should render a button element", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render with an icon on left", () => {
    render(
      <Button leftIcon="BiCalendar" leftIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("calendar")).toBeInTheDocument();
  });

  it("should render with an icon on right", () => {
    render(
      <Button rightIcon="BiCalendar" rightIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("calendar")).toBeInTheDocument();
  });

  it("should render with an arbitraty icon component", () => {
    render(
      <Button rightIcon={FaCalendar} rightIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("calendar")).toBeInTheDocument();
  });
});

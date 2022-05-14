import { press, render, testA11y, screen } from "@fuels-ui/test-utils";

import { Button } from "./Button";

describe("Button", () => {
  it("a11y", async () => {
    await testA11y(<Button>Click</Button>);
  });

  it("should focus when tab", async () => {
    render(<Button>Click</Button>);
    expect(screen.getByText("Click")).not.toHaveFocus();
    await press.Tab();
    expect(screen.getByText("Click")).toHaveFocus();
  });

  it("should click when space", async () => {
    const handler = jest.fn();
    render(<Button onPress={handler}>Click</Button>);
    await press.Tab();
    await press.Space();
    expect(handler).toBeCalledTimes(1);
  });

  it("should render a button element", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have right disabled attributes", () => {
    render(<Button isDisabled>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled");
  });

  it("should render with an icon on left", () => {
    render(
      <Button leftIcon="CalendarIcon" leftIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("calendar")).toBeInTheDocument();
  });

  it("should render with an icon on right", () => {
    render(
      <Button rightIcon="CalendarIcon" rightIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("calendar")).toBeInTheDocument();
  });
});

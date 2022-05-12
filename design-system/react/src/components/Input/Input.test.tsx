import { press, render, screen, testA11y } from "@fuel/test-utils";

import { Button } from "../Button";

import { Input } from "./Input";

const FIELD_ARGS = {
  type: "text",
  name: "name",
  placeholder: "Type your name",
};

describe("Input", () => {
  it("a11y", async () => {
    await testA11y(
      <Input>
        <Input.Field {...FIELD_ARGS} />
      </Input>
    );
  });

  it("should render an input field correctly", () => {
    const { container } = render(
      <Input>
        <Input.Field {...FIELD_ARGS} />
      </Input>
    );

    expect(container.querySelector("input")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render addons correctly", () => {
    render(
      <Input>
        <Input.AddonLeft>https://</Input.AddonLeft>
        <Input.Field {...FIELD_ARGS} />
        <Input.AddonRight>.com</Input.AddonRight>
      </Input>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("https://")).toBeInTheDocument();
    expect(screen.getByText(".com")).toBeInTheDocument();
  });

  it("should render invalid input correctly", () => {
    render(
      <Input isInvalid>
        <Input.Field {...FIELD_ARGS} />
      </Input>
    );
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("should render disabled input correctly", () => {
    render(
      <Input isDisabled>
        <Input.Field {...FIELD_ARGS} />
      </Input>
    );
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });

  it("should render readonly input correctly", () => {
    render(
      <Input isReadOnly>
        <Input.Field {...FIELD_ARGS} />
      </Input>
    );
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-readonly",
      "true"
    );
  });

  it("should render elements using element prop", async () => {
    render(
      <Input isDisabled>
        <Input.Field {...FIELD_ARGS} />
        <Input.ElementRight element={<Button>Click</Button>} />
      </Input>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should don't call elements if disabled", async () => {
    render(
      <Input isDisabled>
        <Input.Field {...FIELD_ARGS} />
        <Input.ElementRight>
          <Button>Click</Button>
        </Input.ElementRight>
      </Input>
    );

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });

  it("should don't call elements if readonly", async () => {
    render(
      <Input isReadOnly>
        <Input.Field {...FIELD_ARGS} />
        <Input.ElementRight>
          <Button>Click</Button>
        </Input.ElementRight>
      </Input>
    );

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });

  it("should focus correctly when have button inside element", async () => {
    render(
      <Input>
        <Input.Field {...FIELD_ARGS} />
        <Input.ElementRight>
          <Button>Click</Button>
        </Input.ElementRight>
      </Input>
    );

    await press.Tab();
    expect(screen.getByRole("textbox")).toHaveFocus();
    await press.Tab();
    expect(screen.getByRole("button")).toHaveFocus();
  });
});

import { render, screen, testA11y } from "@fuel/test-utils";
import type { PropsWithChildren } from "react";

import { Input } from "../Input";

import { Form } from "./Form";
import type { FormControlProps } from "./FormControl";

const FIELD_ARGS = {
  type: "email",
  name: "email",
  id: "email",
  placeholder: "Type your email",
};

function FormComponent(props: PropsWithChildren<FormControlProps>) {
  return (
    <Form.Control {...props}>
      <Form.Label htmlFor="email">Email</Form.Label>
      <Input>
        <Input.Field {...FIELD_ARGS} />
      </Input>
      {props.children}
    </Form.Control>
  );
}

describe("Form", () => {
  it("a11y", async () => {
    await testA11y(<FormComponent />);
  });

  it("should input have aria-describedby by label first", () => {
    const { container } = render(<FormComponent />);

    const input = container.querySelector("input");
    expect(input?.getAttribute("aria-describedby")).toContain("label");
  });

  it("should input have aria-describedby by helper message if present", () => {
    const { container } = render(
      <FormComponent>
        <Form.HelperText>We will never share your email</Form.HelperText>
      </FormComponent>
    );

    const input = container.querySelector("input");
    expect(input?.getAttribute("aria-describedby")).toContain("helperText");
  });

  it("should input have aria-describedby by error message if invalid", () => {
    const { container } = render(
      <FormComponent isInvalid>
        <Form.HelperText>We will never share your email</Form.HelperText>
        <Form.ErrorMessage>Wrong Format</Form.ErrorMessage>
      </FormComponent>
    );

    const input = container.querySelector("input");
    expect(input?.getAttribute("aria-describedby")).toContain("feedback");
  });

  it("should input have props derived from form control state", () => {
    render(<FormComponent isRequired isInvalid isDisabled />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-required",
      "true"
    );
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });

  it("should helper text be hidden if invalid", () => {
    const { container } = render(
      <FormComponent isInvalid>
        <Form.HelperText>We will never share your email</Form.HelperText>
        <Form.ErrorMessage>Wrong Format</Form.ErrorMessage>
      </FormComponent>
    );

    const helperText = container.querySelector(".fuel_form--helper-text");
    const errorMessage = container.querySelector(".fuel_form--error-message");

    expect(helperText).toHaveAttribute("aria-hidden", "true");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should error message be hidden if not invalid", () => {
    const { container } = render(
      <FormComponent>
        <Form.HelperText>We will never share your email</Form.HelperText>
        <Form.ErrorMessage>Wrong Format</Form.ErrorMessage>
      </FormComponent>
    );

    const helperText = container.querySelector(".fuel_form--helper-text");
    const errorMessage = container.querySelector(".fuel_form--error-message");

    expect(helperText).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("aria-hidden", "true");
  });
});

import { render, screen } from "@fuel-ui/test-utils";

import { InputPassword } from "./InputPassword";

describe("InputPassword", () => {
  it("should toggle between type password and text", async () => {
    const { user } = render(<InputPassword placeholder="Type your password" />);

    const input = screen.getByRole("textbox");
    const button = screen.getByLabelText(/Toggle/);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input.getAttribute("type")).toBe("password");

    await user.click(button);
    expect(input.getAttribute("type")).toBe("text");
  });
});

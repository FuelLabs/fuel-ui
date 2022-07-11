import { render, screen } from "@fuel-ui/test-utils";

import { Button } from "../Button";
import { ThemeProvider } from "../ThemeProvider";

import { toast } from "./Toast";

describe("Toast", () => {
  it("should be visible after call toast() function", async () => {
    const { user } = render(
      <ThemeProvider>
        <Button onClick={() => toast("Hello world")}>Show toast</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    await user.press("Enter", button);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});

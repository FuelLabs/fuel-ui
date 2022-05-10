import { render, screen } from "@fuel/test-utils";

import { App } from "./App";

describe("App", () => {
  it("should render a basic ", () => {
    render(<App />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});

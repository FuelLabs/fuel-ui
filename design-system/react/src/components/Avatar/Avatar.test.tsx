import type { RenderResult } from "@fuel-ui/test-utils";
import { screen, mocks, testA11y, render } from "@fuel-ui/test-utils";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  let rendered: RenderResult;

  beforeAll(() => {
    mocks.image();
  });

  afterAll(() => {
    mocks.image.restore();
  });

  beforeEach(() => {
    rendered = render(
      <Avatar
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
    );
  });

  it("a11y", async () => {
    await testA11y(rendered.container);
  });

  it("should render the fallback initially with first with letters of name", async () => {
    expect(await screen.findByText("CT")).toBeInTheDocument();
  });

  it("should fallback text has just one letter if name is one word", async () => {
    render(
      <Avatar
        name="Colm"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
    );
    expect(await screen.findByText("C")).toBeInTheDocument();
  });

  it("should not render the image initially", () => {
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("should render the image after it has loaded", async () => {
    const image = await screen.findByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("should have alt text on the image", async () => {
    const image = await screen.findByAltText("Colm Tuite");
    expect(image).toBeInTheDocument();
  });
});

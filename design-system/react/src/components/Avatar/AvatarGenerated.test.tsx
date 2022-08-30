import { lightColors } from "@fuel-ui/css";
import type { RenderResult } from "@fuel-ui/test-utils";
import { testA11y, render } from "@fuel-ui/test-utils";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("a11y", async () => {
    const rendered: RenderResult = await render(
      <Avatar.Generated hash="0x2cab234f35a4" />
    );
    await testA11y(rendered.container);
  });

  it("should generate a random svg", async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    const rect = container.querySelector("svg rect");
    expect(rect).toEqual(null);
  });

  it("should generate a random svg with random background color", async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" background="random" />
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    const rect = container.querySelector("svg rect");
    expect(rect).toBeInTheDocument();
    expect(rect?.getAttribute("fill")).not.toEqual("");
  });

  it("should generate a random svg with fuel background color", async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" background="fuel" />
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    const rect = container.querySelector("svg rect");
    expect(rect).toBeInTheDocument();
    expect(rect?.getAttribute("fill")).toEqual(lightColors.brand);
  });

  it("should generate a random svg with fixed background color", async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" background="#aaaaaa" />
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    const rect = container.querySelector("svg rect");
    expect(rect).toBeInTheDocument();
    expect(rect?.getAttribute("fill")).toEqual("#aaaaaa");
  });
});

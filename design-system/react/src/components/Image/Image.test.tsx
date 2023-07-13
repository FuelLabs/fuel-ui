import { testA11y } from "@fuels/jest"

import { Image } from "./Image"

describe("Image", () => {
  it("a11y", async () => {
    await testA11y(
      <Image
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photo by Tobias Tullius"
      />,
    )
  })
})

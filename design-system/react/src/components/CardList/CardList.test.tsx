import { testA11y } from "@fuels/jest"

import { CardList } from "./CardList"

describe("CardList", () => {
  it("a11y", async () => {
    await testA11y(<CardList>Hello world</CardList>)
  })
})

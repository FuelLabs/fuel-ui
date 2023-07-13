import { formatAmountLeadingZeros } from "./utils"

describe("InputAmount Utils", () => {
  it("formatAmountLeadingZeros", async () => {
    expect(formatAmountLeadingZeros("0.1")).toBe("0.1")
    expect(formatAmountLeadingZeros(".1")).toBe("0.1")
    expect(formatAmountLeadingZeros("00000.1")).toBe("0.1")
    expect(formatAmountLeadingZeros("00001.1")).toBe("1.1")
    expect(formatAmountLeadingZeros("10000.1")).toBe("10000.1")
    expect(formatAmountLeadingZeros("10000.100000001")).toBe("10000.100000001")
  })
})

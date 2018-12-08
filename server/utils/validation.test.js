const expect = require("expect");

const { isRealString } = require("./validation");

describe("isRealString", () => {
  it ("should reject non-string values", () => {
    expect(isRealString()).toBe(false);
    expect(isRealString(123)).toBe(false);
  });

  it ("should reject empty strings", () => {
    expect(isRealString("")).toBe(false);
  });

  it ("should reject strings with only spaces", () => {
    expect(isRealString("    ")).toBe(false);
  });

  it ("should allow strings with non-space values", () => {
    expect(isRealString("valid")).toBe(true);
    expect(isRealString(" valid ")).toBe(true);
    expect(isRealString("val id")).toBe(true);
  });
});

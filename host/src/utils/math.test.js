import * as math from "./math";

jest.spyOn(math, "add");

describe("Math utils", () => {
  it("Should called with 2 nd 5", () => {
    math.add(2, 5);
    expect(math.add).toHaveBeenCalledWith(2, 5);
  });

  it("Should been called", () => {
    math.add(2, 5);
    expect(math.add).toHaveBeenCalled();
  });

  it("Should return 7", () => {
    expect(math.add(2, 5)).toEqual(7);
  });
});

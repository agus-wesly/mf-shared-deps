import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("use-counter hooks", () => {
  it("Should increment", async () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setCounter((prev) => prev + 1);
      result.current.setCounter((prev) => prev + 1);
      result.current.setCounter((prev) => prev + 1);
    });
    expect(result.current.counter).toEqual(3);
  });
});

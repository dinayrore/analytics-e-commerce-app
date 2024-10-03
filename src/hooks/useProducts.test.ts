import { renderHook } from "@testing-library/react-native";
import { HookErrorMessage } from "./constants";
import useProducts from "./useProducts";

describe("useProducts Hook", () => {
  it("throws an error if custom hook is used without Authentication Context provided", () => {
    expect(() => renderHook(() => useProducts())).toThrow(
      new Error(HookErrorMessage.products),
    );
  });

  it("uses the Products Context values provided", () => {
    //
  });
});

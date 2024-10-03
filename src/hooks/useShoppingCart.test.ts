import { renderHook } from "@testing-library/react-native";
import { HookErrorMessage } from "./constants";
import useShoppingCart from "./useShoppingCart";

describe("useShoppingCart Hook", () => {
  it("throws an error if custom hook is used without Authentication Context provided", () => {
    expect(() => renderHook(() => useShoppingCart())).toThrow(
      new Error(HookErrorMessage.shoppingCart),
    );
  });

  it("uses the Shopping Cart Context values provided", () => {
    //
  });
});

import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCart.context";
import { renderHook } from "@testing-library/react-native";

describe("Shopping Cart Provider", () => {
  it("has a default value of null", () => {
    const { result } = renderHook(() => useContext(ShoppingCartContext));
    expect(result.current).toBeNull();
  });
});

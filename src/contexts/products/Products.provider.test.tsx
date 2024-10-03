import { useContext } from "react";
import { ProductsContext } from "./Products.context";
import { renderHook } from "@testing-library/react-native";

describe("Products Provider", () => {
  it("has a default value of null", () => {
    const { result } = renderHook(() => useContext(ProductsContext));
    expect(result.current).toBeNull();
  });
});

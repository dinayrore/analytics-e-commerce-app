import { renderHook } from "@testing-library/react-native";
import { HookErrorMessage } from "./constants";
import useAuth from "./useAuth";

describe("useAuth Hook", () => {
  it("throws an error if custom hook is used without Authentication Context provided", () => {
    expect(() => renderHook(() => useAuth())).toThrow(
      new Error(HookErrorMessage.auth),
    );
  });

  it("uses the Authentication Context values provided", () => {
    //
  });
});

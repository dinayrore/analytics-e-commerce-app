import React, { useContext } from "react";
import { AuthenticationContext } from "./Authentication.context";
import { renderHook } from "@testing-library/react-native";
import { renderAuthenticationContextProvider } from "jest/helpers";
import { TEST_AUTHENTICATION_CONTEXT_USER, TEST_USER } from "jest/constants";
import { Text, View } from "react-native";

describe("Authentication Provider", () => {
  it("has a default value of null", () => {
    const { result } = renderHook(() => useContext(AuthenticationContext));
    expect(result.current).toBeNull();
  });

  it("composes user properties for name, email, and password onRegister", () => {
    const { getByText } = renderAuthenticationContextProvider(
      <AuthenticationContext.Consumer>
        {(value) => (
          <View>
            <Text>{value?.name}</Text>
            <Text>{value?.email}</Text>
            <Text>{value?.password}</Text>
          </View>
        )}
      </AuthenticationContext.Consumer>,
      TEST_AUTHENTICATION_CONTEXT_USER,
    );
    expect(getByText(TEST_USER.name)).toBeVisible();
    expect(getByText(TEST_USER.email)).toBeVisible();
    expect(getByText(TEST_USER.password)).toBeVisible();
  });

  it("composes user properties for email and password onLogin", () => {
    const { getByText } = renderAuthenticationContextProvider(
      <AuthenticationContext.Consumer>
        {(value) => (
          <View>
            <Text>{value?.email}</Text>
            <Text>{value?.password}</Text>
          </View>
        )}
      </AuthenticationContext.Consumer>,
      TEST_AUTHENTICATION_CONTEXT_USER,
    );
    expect(getByText(TEST_USER.email)).toBeVisible();
    expect(getByText(TEST_USER.password)).toBeVisible();
  });
});

import React from "react";
import { renderWrapper } from "jest/helpers";
import LoginScreen from "./login.screen";
import {
  TEST_AUTHENTICATION_CONTEXT_USER,
  TEST_IS_AUTHENTICATED,
  TEST_USER,
  jestSpyOnNavigationNavigate,
  navigationProps,
} from "jest/constants";
import { fireEvent } from "@testing-library/react-native";
import { LoginScreenText } from "./constants";
import { RootStackRouteNames } from "navigation/constants";

describe("<LoginScreen />", () => {
  it("renders the LoginScreen", () => {
    const { getByTestId, getByLabelText, getByPlaceholderText } = renderWrapper(
      <LoginScreen {...navigationProps} />,
    );

    expect(getByTestId("animation")).toBeVisible();
    expect(getByLabelText(LoginScreenText.titleLabel)).toBeVisible();
    expect(
      getByPlaceholderText(LoginScreenText.emailPlaceholder),
    ).toBeVisible();
    expect(
      getByPlaceholderText(LoginScreenText.passwordPlaceholder),
    ).toBeVisible();
    expect(getByLabelText(LoginScreenText.loginButtonLabel)).toBeVisible();
    expect(getByLabelText(LoginScreenText.signUpButtonLabel)).toBeVisible();
  });

  it("navigates to Registration Screen onPress of the Sign Up Button", () => {
    const { getByLabelText } = renderWrapper(
      <LoginScreen {...navigationProps} />,
    );

    fireEvent.press(getByLabelText(LoginScreenText.signUpButtonLabel));

    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledTimes(1);
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledWith(
      RootStackRouteNames.RegisterScreenName,
    );
  });

  it("performs the onLogin function when the Login Button is pressed", () => {
    const { getByPlaceholderText, getByLabelText } = renderWrapper(
      <LoginScreen {...navigationProps} />,
      TEST_IS_AUTHENTICATED,
    );

    fireEvent.changeText(
      getByPlaceholderText(LoginScreenText.emailPlaceholder),
      TEST_USER.email,
    );
    fireEvent.changeText(
      getByPlaceholderText(LoginScreenText.passwordPlaceholder),
      TEST_USER.password,
    );
    fireEvent.press(getByLabelText(LoginScreenText.loginButtonLabel));

    expect(TEST_AUTHENTICATION_CONTEXT_USER.onLogin).toHaveBeenCalledTimes(1);
    expect(TEST_AUTHENTICATION_CONTEXT_USER.onLogin).toHaveBeenCalledWith(
      TEST_USER.email,
      TEST_USER.password,
    );
  });
});

import React from "react";
import { mockRegistration, renderWrapper } from "jest/helpers";
import RegistrationScreen from "./registration.screen";
import { jestSpyOnNavigationNavigate, navigationProps } from "jest/constants";
import { RegistrationScreenTestIds, RegistrationScreenText } from "./constants";
import { RootStackRouteNames } from "navigation/constants";

describe("<RegistrationScreen />", () => {
  it("renders the RegistrationScreen", () => {
    const { getByTestId, getByLabelText, getByPlaceholderText } = renderWrapper(
      <RegistrationScreen {...navigationProps} />,
    );

    expect(getByTestId(RegistrationScreenTestIds.image)).toBeVisible();
    expect(getByLabelText(RegistrationScreenText.titleLabel)).toBeVisible();
    expect(
      getByPlaceholderText(RegistrationScreenText.namePlaceholder),
    ).toBeVisible();
    expect(
      getByPlaceholderText(RegistrationScreenText.emailPlaceholder),
    ).toBeVisible();
    expect(
      getByPlaceholderText(RegistrationScreenText.passwordPlaceholder),
    ).toBeVisible();

    expect(
      getByLabelText(RegistrationScreenText.signUpButtonLabel),
    ).toBeVisible();
  });

  // TODO: Snowplow mock is not working
  it.skip("navigates to Registration Screen onPress of the Sign Up Button", async () => {
    mockRegistration();
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledTimes(1);
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledWith(
      RootStackRouteNames.ProductsScreenName,
    );
  });
});

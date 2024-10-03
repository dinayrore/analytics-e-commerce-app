import React from "react";
import { renderWrapper } from "jest/helpers";
import MenuDrawer from "./MenuDrawer";
import { fireEvent, waitFor } from "@testing-library/react-native";
import {
  TEST_IS_AUTHENTICATED,
  TEST_USER,
  mockNavigation,
} from "jest/constants";
import { ButtonText } from "components/Button/constants";
import { RootStackRouteNames } from "navigation/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("<MenuDrawer />", () => {
  it("renders a MenuDrawer with a login button", () => {
    const { getByText } = renderWrapper(<MenuDrawer />);

    expect(getByText(ButtonText.login)).toBeVisible();
  });

  it("can navigate to Login onPress", () => {
    const { getByText } = renderWrapper(<MenuDrawer />);

    fireEvent.press(getByText(ButtonText.login));
    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith(
      RootStackRouteNames.LoginScreenName,
    );
  });

  it("renders a MenuDrawer with an authenticated users information and a logout button", () => {
    const { getByText } = renderWrapper(<MenuDrawer />, TEST_IS_AUTHENTICATED);

    expect(getByText(TEST_USER.name)).toBeVisible();
    expect(getByText(TEST_USER.email)).toBeVisible();
    expect(getByText(ButtonText.logout)).toBeVisible();
  });

  it("performs the onLogout function when the Logout Button is pressed", () => {
    const { getByText } = renderWrapper(<MenuDrawer />, TEST_IS_AUTHENTICATED);
    fireEvent.press(getByText(ButtonText.logout));

    // Check User is logged out
    waitFor(async () => {
      expect(await AsyncStorage.getItem("@AuthenticatedUser")).toBe(null);
    });
  });
});

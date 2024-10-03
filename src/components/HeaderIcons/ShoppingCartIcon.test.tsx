import React from "react";
import { fireEvent } from "@testing-library/react-native";
import ShoppingCartIcon from "./ShoppingCartIcon";
import {
  TEST_IS_AUTHENTICATED,
  TEST_IS_EMPTY_CART,
  mockShowToast,
  mockNavigation,
} from "jest/constants";
import { RootStackRouteNames } from "navigation/constants";
import { renderWrapper } from "jest/helpers";
import { ToastMessageText } from "components/ToastMessage/constants";

describe("<ShoppingCartIcon />", () => {
  it("renders a ShoppingCartIcon without a Badge in the application Header", () => {
    const { getByTestId } = renderWrapper(<ShoppingCartIcon />);
    expect(getByTestId("shopping-cart-icon")).toBeVisible();
  });

  it("renders a ShoppingCartIcon with a Badge", () => {
    const { getByText } = renderWrapper(
      <ShoppingCartIcon />,
      !TEST_IS_AUTHENTICATED,
      !TEST_IS_EMPTY_CART,
    );
    expect(getByText("3")).toBeVisible();
  });

  // TODO: Snowplow mock is not working
  it.skip("can navigate to the Shopping Cart onPress", () => {
    const { getByTestId } = renderWrapper(
      <ShoppingCartIcon />,
      TEST_IS_AUTHENTICATED,
    );
    fireEvent.press(getByTestId("shopping-cart-icon"));
    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith(
      RootStackRouteNames.ShoppingCartScreenName,
    );
  });

  it("renders a Toast message when an unauthenticated user attempts to navigate to the Shopping Cart onPress", () => {
    const toastMessageProps = {
      props: { bodyText: ToastMessageText.loginError },
      type: "showNavi",
    };

    const { getByTestId } = renderWrapper(
      <ShoppingCartIcon />,
      !TEST_IS_AUTHENTICATED,
      TEST_IS_EMPTY_CART,
    );
    fireEvent.press(getByTestId("shopping-cart-icon"));
    expect(mockShowToast).toHaveBeenCalledTimes(1);
    expect(mockShowToast).toHaveBeenCalledWith(toastMessageProps);
  });
});

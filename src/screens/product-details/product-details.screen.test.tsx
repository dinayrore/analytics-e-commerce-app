import React from "react";
import { renderWrapper } from "jest/helpers";
import ProductDetailsScreen from "./product-details.screen";
import {
  TEST_IS_AUTHENTICATED,
  TEST_PRODUCT,
  jestSpyOnNavigationNavigate,
  mockedNavigationRoute,
  navigationProps,
} from "jest/constants";
import { fireEvent } from "@testing-library/react-native";
import { ProductDetailsScreenText } from "./constants";
import { RootStackRouteNames } from "navigation/constants";
import { ButtonText } from "components/Button/constants";

describe.skip("<ProductDetails />", () => {
  it("renders the Product Details screen", () => {
    const { getByTestId, getByText, debug } = renderWrapper(
      <ProductDetailsScreen {...navigationProps} />,
      !TEST_IS_AUTHENTICATED,
    );
    debug();

    expect(mockedNavigationRoute.params).toEqual({ id: "11" });
    expect(getByTestId(ProductDetailsScreenText.imageTestId)).toBeVisible();
    expect(getByText(TEST_PRODUCT.title)).toBeVisible();
    expect(getByText(TEST_PRODUCT.device)).toBeVisible();
    expect(getByText(TEST_PRODUCT.price.toString())).toBeVisible();
    expect(getByText(TEST_PRODUCT.version)).toBeVisible();
    expect(getByText(TEST_PRODUCT.description)).toBeVisible();
    expect(getByText(ButtonText.buyNow)).toBeVisible();
    expect(getByText(ButtonText.addToCart)).toBeVisible();
  });

  it("navigates to CheckOut Screen onPress of the Buy Now Button", () => {
    const { getByText } = renderWrapper(
      <ProductDetailsScreen {...navigationProps} />,
    );

    fireEvent.press(getByText(ButtonText.buyNow));

    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledTimes(1);
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledWith(
      RootStackRouteNames.CheckoutScreenName,
    );
  });

  it("navigates to the Shopping Cart Screen onPress of the Add to Cart Button", () => {
    const { getByText } = renderWrapper(
      <ProductDetailsScreen {...navigationProps} />,
      TEST_IS_AUTHENTICATED,
    );

    fireEvent.press(getByText(ButtonText.addToCart));

    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledTimes(1);
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledWith(
      RootStackRouteNames.ShoppingCartScreenName,
    );
  });
});

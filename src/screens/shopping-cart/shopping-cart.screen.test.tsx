import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ShoppingCartScreen from "./shopping-cart.screen";

/**
 * Note that you will need to mock the useShoppingCart
 * hook to provide the cart, onPressCheckout, and
 * onPressRemoveFromCart props to the ShoppingCartScreen component.
 * You can use a library like jest.mock to do this.
 */

describe("ShoppingCartScreen", () => {
  it("should render EmptyState component when cart is empty", () => {
    // const { getByTestId, debug } = render(
    //   <ShoppingCartScreen navigation={mockNavigation} />,
    // );
    // expect(getByTestId("empty-state")).toBeDefined();
  });

  it("should render cart items when cart is not empty", () => {
    // const { getByTestId } = render(
    //   <ShoppingCartScreen navigation={mockNavigation} />,
    // );
    // expect(getByTestId("cart-items")).toBeDefined();
  });

  it("should call onPressRemoveFromCart when remove icon is pressed", () => {
    // const { getByTestId } = render(
    //   <ShoppingCartScreen navigation={mockNavigation} />,
    // );
    // const removeButton = getByTestId("remove-button-1");
    // fireEvent.press(removeButton);
    // expect(mockOnPressRemoveFromCart).toHaveBeenCalled();
  });

  it("should call onPressCheckout when checkout button is pressed", () => {
    // const { getByTestId } = render(
    //   <ShoppingCartScreen navigation={mockNavigation} />,
    // );
    // const checkoutButton = getByTestId("checkout-button");
    // fireEvent.press(checkoutButton);
    // expect(mockOnPressCheckout).toHaveBeenCalled();
  });
});

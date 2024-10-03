import React from "react";
import Logo from "./Logo";
import { fireEvent, render } from "@testing-library/react-native";
import { mockNavigation } from "jest/constants";
import { BottomTabRouteNames } from "navigation/constants";

describe("<Logo />", () => {
  it("renders the application Logo", () => {
    const { getByTestId } = render(<Logo />);
    expect(getByTestId("logo")).toBeVisible();
  });

  it("can navigate to Products onPress", () => {
    const { getByTestId } = render(<Logo />);
    fireEvent.press(getByTestId("logo"));
    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith(
      BottomTabRouteNames.ProductScreenHorizontal,
    );
  });
});

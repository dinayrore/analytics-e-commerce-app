import React from "react";
import MenuIcon from "./MenuIcon";
import { DrawerActions } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import { mockDispatch } from "jest/constants";

describe("<MenuIcon />", () => {
  it("renders a MenuIcon in the application Header", () => {
    const { getByTestId } = render(<MenuIcon />);
    expect(getByTestId("menu-icon")).toBeVisible();
  });

  it("can open the MenuDrawer onPress", () => {
    const { getByTestId } = render(<MenuIcon />);

    fireEvent.press(getByTestId("menu-icon"));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(DrawerActions.toggleDrawer());
  });
});

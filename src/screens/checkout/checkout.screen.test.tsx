import React from "react";
import { renderWrapper } from "jest/helpers";
import CheckOutScreen from "./checkout.screen";

describe("<CheckOutScreen />", () => {
  it("renders the CheckOutScreen", () => {
    const { getByTestId } = renderWrapper(<CheckOutScreen />);

    expect(getByTestId("animation")).toBeVisible();
  });
});

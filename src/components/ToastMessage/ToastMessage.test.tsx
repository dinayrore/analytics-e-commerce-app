import { render } from "@testing-library/react-native";
import React from "react";
import { ToastMessageHeader, ToastMessageText } from "./constants";
import ToastMessage from "./ToastMessage";

describe("<ToastMessage />", () => {
  it("renders a Toast Message", () => {
    const { getByText, getByTestId } = render(
      <ToastMessage
        heading={ToastMessageHeader.heading}
        bodyText={ToastMessageText.genericError}
      />,
    );

    expect(getByTestId("toast-message-image")).toBeVisible();
    expect(getByText(ToastMessageHeader.heading)).toBeVisible();
    expect(getByText(ToastMessageText.genericError)).toBeVisible();
  });
});

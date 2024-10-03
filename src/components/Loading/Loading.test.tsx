import React from "react";
import { render } from "@testing-library/react-native";
import Loading from "./Loading";

describe("<Loading />", () => {
  it("renders an Loading animation when the application isLoading", () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId("animation")).toBeVisible();
  });
});

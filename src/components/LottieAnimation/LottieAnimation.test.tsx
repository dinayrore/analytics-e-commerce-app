import React from "react";
import LottieAnimation from "./LottieAnimation";
import { render } from "@testing-library/react-native";

describe("<LottieAnimation />", () => {
  it("renders the application LottieAnimation", () => {
    const { getByTestId } = render(
      <LottieAnimation source={"assets/lottie/triforce.json"} />,
    );
    expect(getByTestId("animation")).toBeVisible();
  });
});

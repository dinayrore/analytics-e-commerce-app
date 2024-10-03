import React from "react";
import { render } from "@testing-library/react-native";
import Badge from "./Badge";
import { View } from "react-native";

const mockChildProp = <View testID="testChildProp" />;

describe("<Badge />", () => {
  it("renders the child properties passed when the label is less than zero", () => {
    const { getByTestId, queryByText } = render(
      <Badge label={0}>{mockChildProp}</Badge>,
    );

    expect(getByTestId("testChildProp")).toBeVisible();
    expect(queryByText("0")).toBeNull();
  });
  it("renders child properties and a label", () => {
    const { getByTestId, getByText } = render(
      <Badge label={1}>{mockChildProp}</Badge>,
    );

    expect(getByTestId("testChildProp")).toBeVisible();
    expect(getByText("1")).toBeVisible();
  });
});

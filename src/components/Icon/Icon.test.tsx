import React from "react";
import { render } from "@testing-library/react-native";
import Icon from "./Icon";

const onPress = jest.fn();

describe("<Icon />", () => {
  it("renders an Icon", () => {
    const { getByTestId } = render(
      <Icon type={"FontAwesome"} name={"remove"} onPress={() => onPress} />,
    );
    expect(getByTestId("remove-icon")).toBeVisible();
  });
});

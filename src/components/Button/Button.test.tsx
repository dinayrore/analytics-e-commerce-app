import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Button from "./Button";
import { ButtonText } from "./constants";

describe("<Button />", () => {
  it("renders a Button", () => {
    const { getByText } = render(
      <Button buttonText={ButtonText.login} onPress={() => {}} />,
    );

    expect(getByText(ButtonText.login)).toBeVisible();
  });

  it("can send event data onPress", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button buttonText={ButtonText.login} onPress={onPress} />,
    );
    const eventData = { Login: { logged_in: true } };
    fireEvent.press(getByText(ButtonText.login), eventData);
    expect(onPress).toHaveBeenCalledWith(eventData);
  });
});

import React from "react";
import { renderWrapper } from "jest/helpers";
import ErrorScreen from "./error.screen";
import { ErrorScreenLinkText } from "./constants";
import {
  jestSpyOnNavigationGoBack,
  mockedNavigationNavigate,
  mockedNavigationRoute,
} from "jest/constants";
import { fireEvent } from "@testing-library/react-native";

describe("<ErrorScreen />", () => {
  it("renders the ErrorScreen", () => {
    const { getByText } = renderWrapper(
      <ErrorScreen
        navigation={mockedNavigationNavigate}
        route={mockedNavigationRoute}
      />,
    );

    expect(getByText(ErrorScreenLinkText.backToProducts)).toBeVisible();
  });

  it("navigates back to Products onPress of the Error Screen link text", () => {
    const { getByText } = renderWrapper(
      <ErrorScreen
        navigation={mockedNavigationNavigate}
        route={mockedNavigationRoute}
      />,
    );

    fireEvent.press(getByText(ErrorScreenLinkText.backToProducts));
    expect(jestSpyOnNavigationGoBack).toHaveBeenCalledTimes(1);
    expect(jestSpyOnNavigationGoBack).toHaveBeenCalledWith();
  });
});

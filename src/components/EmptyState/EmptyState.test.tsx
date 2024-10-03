import React from "react";
import EmptyState from "./EmptyState";
import { fireEvent, render } from "@testing-library/react-native";
import {
  jestSpyOnNavigationNavigate,
  mockedNavigationNavigate,
} from "jest/constants";
import { EmptyStateText } from "./constants";
import { ButtonText } from "components/Button/constants";
import { RootStackRouteNames } from "navigation/constants";

describe("<EmptyState />", () => {
  it("renders an EmptyState", () => {
    const { getByText } = render(
      <EmptyState navigation={mockedNavigationNavigate} />,
    );
    expect(getByText(EmptyStateText.header)).toBeVisible();
    expect(getByText(EmptyStateText.bodyText)).toBeVisible();
  });

  it("can navigate to Products onPress", () => {
    const { getByText } = render(
      <EmptyState navigation={mockedNavigationNavigate} />,
    );
    fireEvent.press(getByText(ButtonText.backToProducts));
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledTimes(1);
    expect(jestSpyOnNavigationNavigate).toHaveBeenCalledWith(
      RootStackRouteNames.ProductsScreenName,
    );
  });
});

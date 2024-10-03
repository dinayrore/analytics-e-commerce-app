import React from "react";
import { render } from "@testing-library/react-native";
import Card from "./Card";
import {
  Device,
  Description,
  ProductImage,
  Title,
} from "services/data/constants";

describe("<Card />", () => {
  it("renders a Card", () => {
    const { getByText, getByTestId } = render(
      <Card
        title={Title.majorasMask}
        price={49.99}
        image={ProductImage.majorasMask}
        console={Device.switch}
        description={Description.majorasMask}
      />,
    );
    expect(getByText(Title.majorasMask)).toBeVisible();
    expect(getByText("49.99")).toBeVisible();
    expect(getByTestId(`${Title.majorasMask}-image`)).toBeVisible();
    expect(getByText(Device.switch)).toBeVisible();
    expect(getByText(Description.majorasMask)).toBeVisible();
  });
});

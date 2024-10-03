import React from "react";
import { render } from "@testing-library/react-native";
import ItemDetail from "./ItemDetail";
import { Device, Currency, Version } from "services/data/constants";

describe("<ItemDetail />", () => {
  it("renders the Console item details", () => {
    const { getByText } = render(<ItemDetail item={Device.n64} />);
    expect(getByText(Device.n64)).toBeVisible();
  });
  it("renders the Version item details", () => {
    const { getByText } = render(<ItemDetail item={Version.digital} />);
    expect(getByText(Version.digital)).toBeVisible();
  });
  it("renders two dashes for the Price item detail when the item's price value is zero", () => {
    const { getByText } = render(
      <ItemDetail item={0} currency={Currency.USD} />,
    );
    expect(getByText("--")).toBeVisible();
  });

  it("renders a Price item detail when the item's price value is any value greater than zero", () => {
    const { getByText } = render(
      <ItemDetail item={49.99} currency={Currency.USD} />,
    );
    expect(getByText("$49.99")).toBeVisible();
  });

  it("renders a Price item detail in INR", () => {
    const { getByText } = render(
      <ItemDetail item={49.99} currency={Currency.INR} />,
    );
    expect(getByText("49.99 ₹")).toBeVisible();
  });
});

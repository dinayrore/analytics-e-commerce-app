import React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import { renderIcon } from "./helpers";

const onPress = jest.fn();

describe("Icon helpers", () => {
  it("returns an AntDesign Icon", () => {
    const icon = renderIcon({
      type: "AntDesign",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <AntDesign name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns an Entypo Icon", () => {
    const icon = renderIcon({
      type: "Entypo",
      name: "menu",
      onPress,
    });
    expect(icon).toEqual(
      <Entypo name={"menu"} testID={"menu-icon"} onPress={onPress} />,
    );
  });

  it("returns a EvilIcons Icon", () => {
    const icon = renderIcon({
      type: "EvilIcons",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <EvilIcons name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns a Feather Icon", () => {
    const icon = renderIcon({
      type: "Feather",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <Feather name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns a FontAwesome Icon", () => {
    const icon = renderIcon({
      type: "FontAwesome",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <FontAwesome name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns a FontAwesome5 Icon", () => {
    const icon = renderIcon({
      type: "FontAwesome5",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <FontAwesome5 name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns an Fontisto Icon", () => {
    const icon = renderIcon({
      type: "Fontisto",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <Fontisto name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns a Foundation Icon", () => {
    const icon = renderIcon({
      type: "Foundation",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <Foundation name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns an Ionicons Icon", () => {
    const icon = renderIcon({
      type: "Ionicons",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <Ionicons name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns an Octicons Icon", () => {
    const icon = renderIcon({
      type: "Octicons",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <Octicons name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns a Zocial Icon", () => {
    const icon = renderIcon({
      type: "Zocial",
      name: "github",
      onPress,
    });
    expect(icon).toEqual(
      <Zocial name={"github"} testID={"github-icon"} onPress={onPress} />,
    );
  });

  it("returns a SimpleLineIcons Icon", () => {
    const icon = renderIcon({
      type: "SimpleLineIcons",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <SimpleLineIcons name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });

  it("returns a MaterialCommunityIcon Icon", () => {
    const icon = renderIcon({
      type: "MaterialCommunityIcon",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <MaterialCommunityIcons
        name={"link"}
        testID={"link-icon"}
        onPress={onPress}
      />,
    );
  });

  it("returns a MaterialIcons Icon", () => {
    const icon = renderIcon({
      type: "MaterialIcons",
      name: "link",
      onPress,
    });
    expect(icon).toEqual(
      <MaterialIcons name={"link"} testID={"link-icon"} onPress={onPress} />,
    );
  });
});

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
  Octicons,
  Zocial,
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { IconProps } from "./Icon";

export const renderIcon = ({
  type,
  name,
  onPress,
  style,
  color,
  size,
}: IconProps) => {
  switch (type) {
    case "AntDesign":
      return (
        <AntDesign
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Entypo":
      return (
        <Entypo
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "EvilIcons":
      return (
        <EvilIcons
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Feather":
      return (
        <Feather
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Fontisto":
      return (
        <Fontisto
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Foundation":
      return (
        <Foundation
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Ionicons":
      return (
        <Ionicons
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Octicons":
      return (
        <Octicons
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "Zocial":
      return (
        <Zocial
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "SimpleLineIcons":
      return (
        <SimpleLineIcons
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    case "MaterialCommunityIcon":
      return (
        <MaterialCommunityIcons
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
    default:
      return (
        <MaterialIcons
          name={name}
          testID={`${name}-icon`}
          onPress={onPress}
          style={style}
          color={color}
          size={size}
        />
      );
  }
};

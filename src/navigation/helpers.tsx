import React from "react";
import { BottomTabRouteNames } from "./constants";
import { Text } from "react-native";
import { styles } from "./styles";

/**
 * tabBarLabel helper for options to set bottom tab bar icons
 * @param focused boolean
 * @param label BottomTabRouteNames
 * @returns bottom tab label
 */
export const tabBarLabel = (focused: boolean, label: BottomTabRouteNames) => {
  return (
    <Text style={[styles.text, focused ? styles.active : styles.inactive]}>
      {label}
    </Text>
  );
};

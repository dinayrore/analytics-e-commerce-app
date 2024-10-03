import React, { ReactNode } from "react";
import { Pressable, Text, View, ViewProps } from "react-native";
import styles from "./Badge.styles";

interface BadgeProps extends ViewProps {
  children: ReactNode;
  label: number;
}

const Badge = ({ children, label }: BadgeProps) => {
  return (
    <Pressable>
      {children}
      {label > 0 && (
        <View style={styles.container} testID="badge">
          <Text style={styles.label} numberOfLines={1} allowFontScaling={false}>
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Badge;

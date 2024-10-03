import React, { ReactNode } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import styles from "./Button.styles";
import { ButtonText } from "./constants";

interface ButtonProps {
  buttonText: ButtonText;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = ({
  buttonText,
  onPress,
  buttonTextStyle,
  buttonStyle,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}
      accessibilityLabel={`${buttonText} Button`}
    >
      {children}
      <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default Button;

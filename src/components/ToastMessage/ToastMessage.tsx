import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./ToastMessage.styles";
import { BaseToastProps } from "react-native-toast-message";
import { ToastMessageText, ToastMessageHeader } from "./constants";

interface ToastMessageProps extends BaseToastProps {
  heading: ToastMessageHeader;
  bodyText?: ToastMessageText | string;
}

const ToastMessage = ({ heading, bodyText }: ToastMessageProps) => {
  return (
    <View style={styles.card} testID="toast-message">
      <Image
        style={styles.image}
        source={require("assets/images/zelda/navi.png")}
        testID="toast-message-image"
      />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.bodyText}>{bodyText}</Text>
      </View>
    </View>
  );
};
export default ToastMessage;

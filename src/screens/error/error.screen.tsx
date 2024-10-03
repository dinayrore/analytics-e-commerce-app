import { ErrorScreenNavigationProps } from "navigation/types";
import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { styles } from "./error.styles";
import { ErrorScreenLinkText } from "./constants";

const ErrorScreen = ({ navigation }: ErrorScreenNavigationProps) => {
  return (
    <View style={styles.container}>
      <Image source={require("assets/images/error.png")} />
      <Pressable onPress={() => navigation.goBack()} style={styles.link}>
        <Text style={styles.linkText}>
          {ErrorScreenLinkText.backToProducts}
        </Text>
      </Pressable>
    </View>
  );
};

export default ErrorScreen;

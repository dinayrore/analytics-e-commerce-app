import React from "react";
import { View } from "react-native";
import styles from "./Loading.styles";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieAnimation
        styles={styles.loading}
        source={require("assets/lottie/triforce.json")}
      />
    </View>
  );
};

export default Loading;

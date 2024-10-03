import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { globalStyles } from "theme/global.styles";
import { styles } from "./checkout.styles";

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <LottieAnimation
          styles={styles.animation}
          source={require("assets/lottie/success-confetti.json")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

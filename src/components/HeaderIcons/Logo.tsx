import React from "react";
import { Pressable } from "react-native";
import { styles } from "./styles";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { useNavigation } from "@react-navigation/native";
import { ProductsNavigationProps } from "navigation/types";
import { BottomTabRouteNames } from "navigation/constants";

const Logo = () => {
  const navigation = useNavigation<ProductsNavigationProps>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(BottomTabRouteNames.ProductScreenHorizontal)
      }
      testID="logo"
    >
      <LottieAnimation
        styles={styles.logo}
        source={require("assets/lottie/triforce.json")}
      />
    </Pressable>
  );
};

export default Logo;

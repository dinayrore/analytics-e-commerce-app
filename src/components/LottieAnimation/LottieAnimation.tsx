import React from "react";
import LottieView from "lottie-react-native";
import { ImageStyle, StyleProp, View } from "react-native";

interface AnimationProps {
  styles?: StyleProp<ImageStyle>;
  source: string;
}

const LottieAnimation = ({ styles, source }: AnimationProps) => {
  return (
    <View style={[styles]}>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        testID="animation"
        source={source}
      />
    </View>
  );
};

export default LottieAnimation;

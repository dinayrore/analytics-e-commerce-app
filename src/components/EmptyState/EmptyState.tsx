import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./EmptyState.styles";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import { RootStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { NavigationProp } from "@react-navigation/native";
import { EmptyStateText } from "./constants";

interface EmptyStateProps {
  navigation: NavigationProp<RootStackParamList>;
}

const EmptyState = ({ navigation }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{EmptyStateText.header}</Text>
      <Text style={styles.bodyText}>{EmptyStateText.bodyText}</Text>
      <Image
        style={styles.image}
        source={require("assets/images/empty-state.png")}
      />
      <View style={styles.bottomButton}>
        <Button
          buttonText={ButtonText.backToProducts}
          onPress={() =>
            navigation.navigate(RootStackRouteNames.ProductsScreenName)
          }
        />
      </View>
    </View>
  );
};

export default EmptyState;

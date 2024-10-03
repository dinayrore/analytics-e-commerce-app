import React from "react";
import { styles } from "./SmallCard.styles";
import { View, Text, Image } from "react-native";
import { ProductImage, Title } from "services/data/constants";

interface CardProps {
  title: Title;
  image: ProductImage;
}

const SmallCard = ({ title, image }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} testID={`${title}-image`} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SmallCard;

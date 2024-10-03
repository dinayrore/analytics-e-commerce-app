import React from "react";
import { styles } from "./Card.styles";
import { View, Text, Image } from "react-native";
import {
  Device,
  Currency,
  Description,
  ProductImage as ImageType,
  Title,
} from "services/data/constants";
import ItemDetail from "components/ItemDetail/ItemDetail";

interface CardProps {
  title: Title;
  price: number;
  image: ImageType;
  console: Device;
  description: Description;
  currency?: Currency;
}

const Card = ({
  title,
  price,
  image,
  console,
  description,
  currency,
}: CardProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} testID={`${title}-image`} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemDetails}>
        <ItemDetail item={console} />
        <ItemDetail item={price} currency={currency} />
      </View>
      <Text style={styles.description} numberOfLines={5}>
        {description}
      </Text>
    </View>
  );
};

export default Card;

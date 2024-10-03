import React from "react";
import { styles } from "./ItemDetail.styles";
import { View, Text } from "react-native";
import { Device, Currency, Version } from "services/data/constants";

interface ItemDetailProps {
  item: Device | Version | number;
  currency?: Currency;
}

const ItemDetail = ({ item, currency }: ItemDetailProps) => {
  const price = currency === Currency.USD ? `$${item}` : `${item} ₹`;
  const displayPrice = item === 0 ? "--" : price;
  const displayItem = currency === undefined ? item : displayPrice;

  return (
    <View style={styles.details}>
      <View style={styles.line} />
      <Text style={styles.item}>{displayItem}</Text>
    </View>
  );
};

export default ItemDetail;

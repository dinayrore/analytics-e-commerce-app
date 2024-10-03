import useProductDetails from "hooks/useProductDetails";
import React from "react";
import { SafeAreaView, Image, Text, ScrollView, View } from "react-native";
import { globalStyles } from "theme/global.styles";
import { styles } from "./product-details.styles";
import ItemDetail from "components/ItemDetail/ItemDetail";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import useShoppingCart from "hooks/useShoppingCart";
import { createPurchase } from "../../contexts/shopping-cart/helpers";
import { ProductDetailsScreenNavigationProps } from "navigation/types";
import { ProductDetailsScreenText } from "./constants";

const ProductDetailsScreen = ({
  route,
}: ProductDetailsScreenNavigationProps) => {
  const { product } = useProductDetails(route);
  const { onPressAddToCart, onPressCheckout } = useShoppingCart();

  if (!product) {
    return null;
  }

  const { title, price, image, device, description, version, currency } =
    product;
  const purchase = createPurchase(product);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={image}
          testID={ProductDetailsScreenText.imageTestId}
        />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.itemDetails}>
          <ItemDetail item={device} />
          <ItemDetail item={price} currency={currency} />
          <ItemDetail item={version} />
        </View>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
      <View style={globalStyles.bottomButtons}>
        <Button
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          buttonText={ButtonText.buyNow}
          onPress={() => onPressCheckout([purchase], ButtonText.buyNow)}
        />
        <Button
          buttonText={ButtonText.addToCart}
          onPress={() => onPressAddToCart(product)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

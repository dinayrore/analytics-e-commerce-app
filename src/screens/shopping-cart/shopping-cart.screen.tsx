import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import useShoppingCart from "hooks/useShoppingCart";
import React from "react";
import { SafeAreaView, View, Image, Text, FlatList } from "react-native";
import { globalStyles } from "theme/global.styles";
import { styles } from "./shopping-cart.styles";
import { getTotalValue } from "services/data/helpers";
import Icon from "components/Icon/Icon";
import { ShoppingCartScreenNavigationProps } from "navigation/types";
import EmptyState from "components/EmptyState/EmptyState";

const ShoppingCartScreen = ({
  navigation,
}: ShoppingCartScreenNavigationProps) => {
  const { cart, onPressCheckout, onPressRemoveFromCart } = useShoppingCart();
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {cart.length === 0 ? (
        <EmptyState navigation={navigation} />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={cart}
            renderItem={({ item }) =>
              item.quantity > 0 ? (
                <View key={item.id}>
                  <View style={styles.itemContainer}>
                    <Image style={styles.itemImage} source={item.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Icon
                      style={styles.icon}
                      name="remove"
                      type={"FontAwesome"}
                      onPress={() => onPressRemoveFromCart(item)}
                    />
                  </View>
                  <View style={styles.hr} />
                </View>
              ) : null
            }
            keyExtractor={(item) => `${item.id}`}
          />
          <View style={styles.hr} />
          <Text style={styles.total}>Total: {getTotalValue(cart)}</Text>
          <View style={styles.bottomButton}>
            <Button
              buttonText={ButtonText.checkout}
              onPress={() => onPressCheckout(cart, ButtonText.checkout)}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;

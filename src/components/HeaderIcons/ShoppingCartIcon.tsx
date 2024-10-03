import React from "react";
import { useNavigation } from "@react-navigation/native";
import Badge from "components/Badge/Badge";
import Icon from "components/Icon/Icon";
import useShoppingCart from "hooks/useShoppingCart";
import { styles } from "./styles";
import useAuth from "hooks/useAuth";
import useToastMessage from "hooks/useToastMessage";
import { ToastMessageText } from "components/ToastMessage/constants";
import { sendAnalyticsViewCartEvents } from "services/analytics/helpers";
import { ShoppingCartNavigationProps } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";

const ShoppingCartIcon = () => {
  const navigation = useNavigation<ShoppingCartNavigationProps>();
  const { cartCount, cart } = useShoppingCart();
  const { isAuthenticated } = useAuth();
  const { showNavi } = useToastMessage();

  const navigateToCart = () => {
    if (isAuthenticated) {
      navigation.navigate(RootStackRouteNames.ShoppingCartScreenName);
      sendAnalyticsViewCartEvents(cart, isAuthenticated);
    } else {
      showNavi(ToastMessageText.loginError);
    }
  };

  return (
    <Badge label={cartCount}>
      <Icon
        style={styles.shoppingCartIcon}
        type={"Entypo"}
        name={"shopping-cart"}
        onPress={navigateToCart}
      />
    </Badge>
  );
};

export default ShoppingCartIcon;

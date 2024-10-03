import React, { useState, ReactNode, useCallback, useMemo } from "react";
import "react-native-get-random-values";
import { ShoppingCartContext } from "./ShoppingCart.context";
import { Product } from "services/data/products";
import useAuth from "hooks/useAuth";
import useToastMessage from "hooks/useToastMessage";
import { ToastMessageText } from "components/ToastMessage/constants";
import { useNavigation } from "@react-navigation/native";
import { ButtonText } from "components/Button/constants";
import {
  adjustQuantity,
  adjustStock,
  checkCart,
  checkStock,
  createPurchase,
  getCartCount,
  getProductsFromAsyncStorage,
  removePurchaseFromCart,
  updatePurchaseInCart,
} from "./helpers";
import {
  sendAnalyticsAddToCartEvents,
  sendAnalyticsCheckoutEvents,
  sendAnalyticsRemoveFromCartEvents,
  sendAnalyticsViewCartEvents,
} from "services/analytics/helpers";
import { Purchase } from "services/data/types";
import { ShoppingCartNavigationProps } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cart, setCart] = useState<Purchase[]>([]);
  const { isAuthenticated, user } = useAuth();
  const { showNavi } = useToastMessage();
  const navigation = useNavigation<ShoppingCartNavigationProps>();
  const cartCount = getCartCount(cart);

  // Creates an item to be added to the cart
  const addProductToCart = useCallback(
    (product: Product) => {
      const itemInCart = checkCart(cart, product.id);

      if (itemInCart) {
        const adjustedItem = adjustQuantity(itemInCart);
        const updatedCart = updatePurchaseInCart(cart, adjustedItem);
        setCart(updatedCart);
        sendAnalyticsAddToCartEvents(
          adjustedItem,
          updatedCart,
          isAuthenticated,
          user,
        );
        sendAnalyticsViewCartEvents(updatedCart, isAuthenticated);
      } else {
        const purchase = createPurchase(product);
        setCart([...cart, purchase]);
        sendAnalyticsAddToCartEvents(
          purchase,
          [...cart, purchase],
          isAuthenticated,
          user,
        );
        sendAnalyticsViewCartEvents([...cart, purchase], isAuthenticated);
      }
      navigation.navigate(RootStackRouteNames.ShoppingCartScreenName);
    },
    [cart, isAuthenticated, navigation, user],
  );

  const onPressRemoveFromCart = useCallback(
    async (purchase: Purchase) => {
      const isReturn = true;
      // Fetch Products from AsyncStorage
      const parsedProducts = await getProductsFromAsyncStorage();
      if (!parsedProducts) return;
      // Find the product within fetched products
      const productFound = parsedProducts.find(
        (item) => item.id === purchase.id,
      );
      if (!productFound) return;
      // Adjust inventory stock of item to proceed with return
      adjustStock(parsedProducts, productFound, true);

      const adjustedProduct = adjustQuantity(purchase, isReturn);
      // The amount of an item we had before returning it
      const purchasedItemQuantity = purchase.quantity + 1;

      // Update cart
      let updatedCart: Purchase[] = [];

      // There are multiple items in the cart
      if (purchasedItemQuantity > 1) {
        updatedCart = updatePurchaseInCart(cart, adjustedProduct);

        setCart([...updatedCart]);
        sendAnalyticsRemoveFromCartEvents(
          adjustedProduct,
          [...updatedCart],
          isAuthenticated,
        );
      } else {
        updatedCart = removePurchaseFromCart(cart, adjustedProduct.id);
        setCart([...updatedCart]);
        sendAnalyticsRemoveFromCartEvents(
          adjustedProduct,
          [...updatedCart],
          isAuthenticated,
        );
      }

      // There was only one item left in the cart
      if (cartCount === 1) {
        setCart([]);
        sendAnalyticsRemoveFromCartEvents(adjustedProduct, [], isAuthenticated);
      }
    },
    [cart, isAuthenticated, cartCount],
  );

  const onPressCheckout = useCallback(
    (purchase: Purchase[], buttonText: ButtonText) => {
      if (isAuthenticated) {
        // Buy now from the product details page
        if (purchase.length === 1) {
          sendAnalyticsCheckoutEvents(purchase, isAuthenticated, buttonText);
        } else {
          // Checkout from cart
          sendAnalyticsCheckoutEvents(purchase, isAuthenticated, buttonText);
        }

        navigation.navigate(RootStackRouteNames.CheckoutScreenName);
        setCart([]);
      } else {
        showNavi(ToastMessageText.loginError);
      }
    },
    [isAuthenticated, navigation, showNavi],
  );

  const onPressAddToCart = useCallback(
    async (product: Product) => {
      if (!isAuthenticated) {
        showNavi(ToastMessageText.loginError);
        return;
      }
      // Fetch Products from AsyncStorage
      const parsedProducts = await getProductsFromAsyncStorage();
      if (!parsedProducts) return;
      // Find the product within fetched products
      const productFound = parsedProducts.find(
        (item) => item.id === product.id,
      );
      if (!productFound) return;
      // Check if the product is in stock
      const isInStock = checkStock(productFound);

      if (isInStock) {
        adjustStock(parsedProducts, productFound, false);
        addProductToCart(product);
      } else {
        showNavi(ToastMessageText.outOfStock);
      }
    },
    [addProductToCart, isAuthenticated, showNavi],
  );

  const provider = useMemo(() => {
    return {
      cart,
      cartCount,
      onPressRemoveFromCart,
      onPressAddToCart,
      onPressCheckout,
    };
  }, [
    cart,
    cartCount,
    onPressRemoveFromCart,
    onPressAddToCart,
    onPressCheckout,
  ]);

  return (
    <ShoppingCartContext.Provider value={provider}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

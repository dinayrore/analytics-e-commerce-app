import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ProductsContext } from "./Products.context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import useAuth from "hooks/useAuth";
import { Product } from "services/data/products";
import {
  sendAnalyticsErrorEvents,
  sendAnalyticsSelectItemEvents,
  sendAnalyticsViewItemListEvents,
} from "services/analytics/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductDetailsNavigationProps } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { isAuthenticated } = useAuth();
  const navigation = useNavigation<ProductDetailsNavigationProps>();

  /**
   * onPress handler for Product Details Screen
   * navigates to a Products Detail Screen
   */
  const onPressProducts = useCallback(
    (product: Product) => {
      // Send Analytics
      sendAnalyticsSelectItemEvents(product, isAuthenticated);

      // Navigate to Product Details
      navigation.navigate(RootStackRouteNames.ProductDetailsScreenName, {
        id: product.id,
      });
    },
    [isAuthenticated, navigation],
  );

  /**
   * onPress handler for Error Screen
   * navigates to Error Screen
   */
  const onPressProductsError = useCallback(() => {
    // Send Analytics
    sendAnalyticsErrorEvents(isAuthenticated);
    // Navigate to Error Screen
    navigation.navigate(RootStackRouteNames.ErrorScreenName);
  }, [isAuthenticated, navigation]);

  /**
   * "Simulate" an API call to get the PRODUCTS array
   * uses AsyncStorage to get the products
   * @returns a list of products or navigates to Error screen
   */
  const getProducts = useCallback(async () => {
    const getItems = await AsyncStorage.getItem("@Products");
    if (getItems) {
      const parsedProducts: Product[] = JSON.parse(getItems);
      setProducts(parsedProducts);
    }
  }, []);

  // Lifecycle hooks
  useFocusEffect(
    useCallback(() => {
      if (products.length > 0) {
        sendAnalyticsViewItemListEvents(products, isAuthenticated);
      }
    }, [isAuthenticated, products]),
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const provider = useMemo(() => {
    return {
      products,
      onPressProducts,
      onPressProductsError,
    };
  }, [products, onPressProducts, onPressProductsError]);

  return (
    <ProductsContext.Provider value={provider}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

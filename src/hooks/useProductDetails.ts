import { RouteProp, useFocusEffect } from "@react-navigation/native";
import { Product } from "services/data/products";
import { useCallback, useEffect, useState } from "react";
import { RootStackParamList } from "navigation/types";
import useAuth from "./useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendAnalyticsViewItemEvents } from "services/analytics/helpers";

const useProductDetails = (route: RouteProp<RootStackParamList>) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, _setIsLoading] = useState<boolean>(false);
  const [error, _setError] = useState<string | null>(null);

  const { isAuthenticated } = useAuth();

  const id = route.params?.id;

  /**
   * "Simulate" an API call to get a single product
   * @param id The id of the product to get
   * @returns a product
   */
  const getProduct = useCallback(async () => {
    const getProducts = await AsyncStorage.getItem("@Products");
    if (getProducts) {
      const parsedProducts = JSON.parse(getProducts);
      const productFound: Product = parsedProducts.find(
        (item: Product) => item.id === id,
      );
      setProduct(productFound);
    }
  }, [id]);

  // Lifecycle hooks
  useFocusEffect(
    useCallback(() => {
      if (product) {
        sendAnalyticsViewItemEvents(product, isAuthenticated);
      }
    }, [isAuthenticated, product]),
  );

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return {
    product,
    getProduct,
    isLoading,
    error,
  };
};

export default useProductDetails;

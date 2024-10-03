import Card from "components/Cards/Card";
import useProducts from "hooks/useProducts";
import React from "react";
import { Pressable, SafeAreaView } from "react-native";
import { globalStyles } from "theme/global.styles";
import { styles } from "./products.styles";
import { Product } from "services/data/products";
import { ScrollView } from "react-native-gesture-handler";

const ProductsScreen = () => {
  const { products, onPressProducts, onPressProductsError } = useProducts();

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.container]}>
      <ScrollView>
        {products.map((product: Product) => (
          <Pressable
            key={product.id}
            onPress={() =>
              product.stock === 0
                ? onPressProductsError()
                : onPressProducts(product)
            }
          >
            <Card
              title={product.title}
              price={product.price}
              image={product.image}
              console={product.device}
              description={product.description}
              currency={product.currency}
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

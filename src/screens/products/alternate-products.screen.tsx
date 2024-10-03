import useProducts from "hooks/useProducts";
import React from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import { globalStyles } from "theme/global.styles";
import { styles } from "./products.styles";
import SmallCard from "components/Cards/SmallCard";
import { Product } from "services/data/products";

const AlternateProductsScreen = () => {
  const { products, onPressProducts, onPressProductsError } = useProducts();

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
          {products.map((product: Product) => (
            <Pressable
              key={product.id}
              onPress={() =>
                product.stock === 0
                  ? onPressProductsError()
                  : onPressProducts(product)
              }
            >
              <SmallCard title={product.title} image={product.image} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlternateProductsScreen;

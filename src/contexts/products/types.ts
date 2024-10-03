import { Product } from "services/data/products";

export type ProductsContextType = {
  products: Product[];
  onPressProducts: (item: Product) => void;
  onPressProductsError: () => void;
};

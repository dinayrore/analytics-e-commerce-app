import { ProductsContext } from "contexts/products/Products.context";
import { useContext } from "react";
import { HookErrorMessage } from "./constants";

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(HookErrorMessage.products);
  }

  return context;
};

export default useProducts;

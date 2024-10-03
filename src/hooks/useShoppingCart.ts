import { ShoppingCartContext } from "contexts/shopping-cart/ShoppingCart.context";
import { useContext } from "react";
import { HookErrorMessage } from "./constants";

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(HookErrorMessage.shoppingCart);
  }

  return context;
};

export default useShoppingCart;

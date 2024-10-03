import { ButtonText } from "components/Button/constants";
import { Product } from "services/data/products";
import { Purchase } from "services/data/types";

export type ShoppingCartContextType = {
  cart: Purchase[];
  cartCount: number;
  onPressRemoveFromCart: (purchase: Purchase) => void;
  onPressAddToCart: (product: Product) => void;
  onPressCheckout: (purchase: Purchase[], buttonText: ButtonText) => void;
};

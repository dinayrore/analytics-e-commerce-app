import { findIndex } from "services/data/helpers";
import { Product } from "services/data/products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Purchase } from "services/data/types";

/**
 * Fetch Products from AsyncStorage
 * @returns a list of products from AsyncStorage
 */
export const getProductsFromAsyncStorage = async () => {
  const getItems = await AsyncStorage.getItem("@Products");

  if (getItems === null) return null;

  const parsedProducts: Product[] = JSON.parse(getItems);
  return parsedProducts;
};

/**
 * Get the total number of items in a user's cart
 */
export const getCartCount = (cart: Purchase[]) => {
  let cartCount = 0;
  if (cart.length > 0) {
    cartCount = cart.reduce((count, product) => count + product.quantity, 0);
  }
  return cartCount;
};

/**
 * Check inventory of product stock to verify if product is available
 * @param product a Product object
 * @returns true or false
 */
export const checkStock = (product: Product) => {
  if (!product.stock) {
    return false;
  }
  return true;
};

/**
 * Transform a Product into a Purchase type object
 * @param product
 * @returns
 */
export const createPurchase = (product: Product): Purchase => {
  return {
    id: product.id,
    brand: product.brand,
    title: product.title,
    price: product.price,
    image: product.image,
    version: product.version,
    device: product.device,
    currency: product.currency,
    quantity: 1,
  };
};

/**
 * Shopping Cart Provider Helper Function - adjusts quantity of a purchaseable product
 * @param purchase
 * @returns a purchase with adjusted quantity and price values
 */
export const adjustQuantity = (purchase: Purchase, isReturn?: boolean) => {
  if (isReturn) {
    return {
      ...purchase,
      quantity: (purchase.quantity -= 1),
    };
  } else {
    return {
      ...purchase,
      quantity: (purchase.quantity += 1),
    };
  }
};

/**
 * Adjust the stock of a product in the PRODUCTS object (inventory)
 * @param products parsed JSON of PRODUCTS fetched from AsyncStorage
 * @param product the product intended for purchase
 * @param isReturn true or false
 */
export const adjustStock = async (
  products: Product[],
  product: Product,
  isReturn: boolean,
) => {
  if (isReturn) {
    const updatedProduct = {
      ...product,
      stock: (product.stock += 1),
    };

    const index = findIndex(products, product.id);
    let productsCopy = [...products];
    productsCopy[index] = updatedProduct;

    AsyncStorage.setItem("@Products", JSON.stringify(productsCopy));
  } else {
    const stock =
      product.stock === 0 ? (product.stock = 0) : (product.stock -= 1);

    const updatedProduct = {
      ...product,
      stock,
    };
    const index = findIndex(products, product.id);
    let productsCopy = [...products];
    productsCopy[index] = updatedProduct;

    AsyncStorage.setItem("@Products", JSON.stringify(productsCopy));
    return product.stock;
  }
};

/**
 * Search for the item within the cart
 * @param cart a list of purchaseable products
 * @param id the id of the product to search for
 * @returns Purchase or false
 */
export const checkCart = (cart: Purchase[], id: string) => {
  // If there are no items in the cart, return false
  if (cart.length === 0) {
    return false;
  }
  // If there are items in the cart, and the item id matches the id
  // of an item in the cart, return true
  const itemInCart = cart.find((product) => product.id === id);
  if (itemInCart) {
    return itemInCart;
  } else {
    return false;
  }
};

/**
 * Update an item currently in the cart
 * @param cart a list of purchaseable products
 * @param adjustedProduct newly adjusted purchaseable product
 * @returns copy of cart with updated product
 */
export const updatePurchaseInCart = (
  cart: Purchase[],
  adjustedProduct: Purchase,
) => {
  const index = findIndex(cart, adjustedProduct.id);
  let cartCopy = [...cart];
  cartCopy[index] = adjustedProduct;
  return cartCopy;
};

/**
 * Remove an purchase from the cart and update cart with new list
 */
export const removePurchaseFromCart = (cart: Purchase[], id: string) => {
  let cartCopy = [...cart];
  const updatedCart = cartCopy.filter((product) => product.id !== id);
  return updatedCart;
};

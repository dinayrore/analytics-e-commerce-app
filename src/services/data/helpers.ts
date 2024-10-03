import { Currency } from "./constants";
import { Product } from "./products";
import { Purchase } from "./types";

/**
 * Get the number of products or purchases
 * @param product a list of Products or purchasable products
 * @returns number
 */
export const getCount = (products: Product[] | Purchase[]): number => {
  return products.length;
};

/**
 * Get the list of products
 * @param product PRODUCTS object
 * @returns list of product titles
 */
export const getProductList = (products: Product[] | Purchase[]): string[] => {
  return products.map((product) => product.title);
};

/**
 * Get the index of a product or purchase using findIndex
 * @param products an Products object or a Purchase object
 * @param id a product or purchaseable product id
 * @returns an index
 */
export const findIndex = (
  products: Product[] | Purchase[],
  id: string,
): number => {
  return products.findIndex((product) => product.id === id);
};

// TODO: Actually send back true currency with calculated rate of conversion
/**
 * Get the currency of products
 * @param product PRODUCTS object
 * @returns USD
 */
export const getCurrency = (): Currency => {
  return Currency.USD;
};

/**
 * Get the total value of products purchased
 * @param purchase a list of purchaseable products
 * @returns total value of products
 */
export const getTotalValue = (purchase: Purchase[]): number => {
  let totalCost: number[] = [];

  purchase.forEach((product) => {
    const price = product.price;
    const quantity = product.quantity;
    const total = price * quantity;
    totalCost.push(total);
  });

  return totalCost.reduce((sum, value) => sum + value, 0);
};

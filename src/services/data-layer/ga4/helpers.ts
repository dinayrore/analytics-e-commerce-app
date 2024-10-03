import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { GA4EventProperty } from "services/analytics/ga4/constants";
import { PRODUCTS, Product } from "services/data/products";
import {
  GA4ErrorEvent,
  GA4Product,
  GA4ProductEvent,
  GA4ProductsEvent,
  GA4LogoutEvent,
  GA4PurchaseEvent,
  GA4AuthEvent,
  GA4Purchase,
  GA4ProductsPurchasedEvent,
} from "./types";
import { ButtonText } from "components/Button/constants";
import { getCurrency, findIndex, getTotalValue } from "services/data/helpers";
import { getCartCount } from "contexts/shopping-cart/helpers";
import { Purchase } from "services/data/types";

/**
 * Re-map product properties to GA4 friendly keys
 * @param products a list of products
 * @returns re-mapped Product object
 */
export const mapProductsToGA4Properties = (
  products: Product[],
): GA4Product[] => {
  const productsRemapped = products.map((product) => {
    return {
      [GA4EventProperty.itemId]: product.id,
      [GA4EventProperty.itemName]: product.title,
      [GA4EventProperty.index]: findIndex(PRODUCTS, product.id),
      [GA4EventProperty.itemBrand]: product.brand,
      [GA4EventProperty.itemCategory]: product.device,
      [GA4EventProperty.itemVariant]: product.version,
      [GA4EventProperty.price]: product.price,
      [GA4EventProperty.stock]: product.stock,
    };
  });
  return productsRemapped;
};

/**
 * Re-map a products properties to GA4 friendly keys
 * @param product a single product from the PRODUCTS object
 * @returns re-mapped Product object
 */
export const mapProductToGA4Properties = (product: Product): GA4Product => {
  return {
    [GA4EventProperty.itemId]: product.id,
    [GA4EventProperty.itemName]: product.title,
    [GA4EventProperty.index]: findIndex(PRODUCTS, product.id),
    [GA4EventProperty.itemBrand]: product.brand,
    [GA4EventProperty.itemCategory]: product.device,
    [GA4EventProperty.itemVariant]: product.version,
    [GA4EventProperty.price]: product.price,
    [GA4EventProperty.stock]: product.stock,
  };
};

/**
 * Re-map the purchaseable products properties to GA4 friendly keys
 * @param cart a list of purchaseable products
 * @param purchase a purchaseable product list
 * @returns re-mapped Purchase object
 */
export const mapPurchasesToGA4Properties = (
  purchase: Purchase[],
): GA4Purchase[] => {
  const purchaseRemapped = purchase.map((product) => {
    return {
      [GA4EventProperty.itemId]: product.id,
      [GA4EventProperty.itemName]: product.title,
      [GA4EventProperty.index]: findIndex(PRODUCTS, product.id),
      [GA4EventProperty.itemBrand]: product.brand,
      [GA4EventProperty.itemCategory]: product.device,
      [GA4EventProperty.itemVariant]: product.version,
      [GA4EventProperty.price]: product.price,
      [GA4EventProperty.quantity]: product.quantity,
    };
  });
  return purchaseRemapped;
};

/**
 * Re-map a purchaseable products properties to GA4 friendly keys
 * @param cart a list of purchaseable products
 * @param purchase a single product for purchase
 * @returns re-mapped Purchase object
 */
export const mapPurchaseToGA4Properties = (purchase: Purchase): GA4Purchase => {
  return {
    [GA4EventProperty.itemId]: purchase.id,
    [GA4EventProperty.itemName]: purchase.title,
    [GA4EventProperty.index]: findIndex(PRODUCTS, purchase.id),
    [GA4EventProperty.itemBrand]: purchase.brand,
    [GA4EventProperty.itemCategory]: purchase.device,
    [GA4EventProperty.itemVariant]: purchase.version,
    [GA4EventProperty.price]: purchase.price,
    [GA4EventProperty.quantity]: purchase.quantity,
  };
};

/**
 * Create event for Login, Sign Up, and Menu Views
 * @param isAuthenticated boolean value of users authentication status
 * @param loginMethod optional for now as "Email" is the only sign in option
 * Additionally this allows for reuse of this function for the Menu View and Sign Up events
 * @returns
 */
export const createGA4AuthEvent = (
  isAuthenticated: boolean,
  loginMethod?: string,
): GA4AuthEvent => {
  // If the user has logged with the login method specified, then return this event
  if (loginMethod === "Email") {
    return {
      [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
      [GA4EventProperty.loginMethod]: loginMethod,
    };
  }
  // Otherwise, the user is viewing the menu or signing up, so return this event
  else
    return {
      [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
    };
};

/**
 * Create a page view event for the products screen
 * @param products a list of products
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4ViewItemListEvent = (
  products: Product[],
  isAuthenticated: boolean,
): GA4ProductsEvent => {
  return {
    [GA4EventProperty.items]: mapProductsToGA4Properties(products),
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create an event for selecting an item
 * @param product a product object
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4SelectItemEvent = (
  product: Product,
  isAuthenticated: boolean,
): GA4ProductsEvent => {
  return {
    [GA4EventProperty.items]: [mapProductToGA4Properties(product)],
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create a page view event for a given item
 * @param product a product object
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4ViewItemEvent = (
  product: Product,
  isAuthenticated: boolean,
): GA4ProductEvent => {
  return {
    [GA4EventProperty.currency]: product.currency,
    [GA4EventProperty.value]: product.price,
    [GA4EventProperty.items]: [mapProductToGA4Properties(product)],
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create an event for selecting an item
 * @param purchase the product selected for removal
 * @param cart a list of purchased products
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4RemoveFromCartEvent = (
  purchase: Purchase,
  cart: Purchase[],
  isAuthenticated: boolean,
): GA4ProductsPurchasedEvent => {
  return {
    [GA4EventProperty.currency]: getCurrency(),
    [GA4EventProperty.value]: getTotalValue(cart),
    [GA4EventProperty.items]: [mapPurchaseToGA4Properties(purchase)],
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create a page view and add_to_cart event for the e-commerce cart
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4CartEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
): GA4ProductsPurchasedEvent => {
  return {
    [GA4EventProperty.currency]: getCurrency(),
    [GA4EventProperty.value]: getTotalValue(cart),
    [GA4EventProperty.items]: mapPurchasesToGA4Properties(cart),
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create a purchase event
 * @param purchase a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @param buttonText the text of the button that triggered the event
 * @returns GA4 Event
 */
export const createGA4PurchaseEvent = (
  purchase: Purchase[],
  isAuthenticated: boolean,
  buttonText: ButtonText,
): GA4PurchaseEvent => {
  return {
    [GA4EventProperty.currency]: getCurrency(),
    [GA4EventProperty.value]: getTotalValue(purchase),
    [GA4EventProperty.transactionId]: uuidv4(),
    [GA4EventProperty.items]: mapPurchasesToGA4Properties(purchase),
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
    [GA4EventProperty.triggerLocation]: buttonText,
  };
};

/**
 * Create a logout event
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4LogoutEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
): GA4LogoutEvent => {
  return {
    [GA4EventProperty.itemCount]: getCartCount(cart),
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create an error event
 * @param isAuthenticated boolean value of users authentication status
 * @returns GA4 Event
 */
export const createGA4ErrorEvent = (
  isAuthenticated: boolean,
): GA4ErrorEvent => {
  return {
    [GA4EventProperty.errorCode]: "404",
    [GA4EventProperty.errorType]: "Page Not Found",
    [GA4EventProperty.triggerLocation]: "Products Screen",
    [GA4EventProperty.loggedIn]: isAuthenticated.toString(),
  };
};

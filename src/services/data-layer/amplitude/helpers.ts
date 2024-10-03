import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { AmplitudeEventProperty } from "services/analytics/amplitude/constants";
import { AnalyticEventType } from "services/analytics/constants";
import { PRODUCTS, Product } from "services/data/products";
import {
  AmplitudeProduct,
  AmplitudeAuthEvent,
  AmplitudeViewItemListEvent,
  AmplitudeSelectItemEvent,
  AmplitudeViewItemEvent,
  AmplitudeViewCartEvent,
  AmplitudeCartActionEvent,
  AmplitudePurchaseEvent,
  AmplitudeErrorEvent,
  AmplitudeLogoutEvent,
  AmplitudePurchase,
} from "./types";
import {
  getCurrency,
  getCount,
  findIndex,
  getProductList,
  getTotalValue,
} from "services/data/helpers";
import { ButtonText } from "components/Button/constants";
import { getCartCount } from "contexts/shopping-cart/helpers";
import { Purchase } from "services/data/types";

/**
 * Re-map the product properties to Amplitude friendly keys
 * @param products a list of products
 * @returns re-mapped Product object
 */
export const mapProductsToAmplitudeProperties = (
  products: Product[],
): AmplitudeProduct[] => {
  const productsRemapped = products.map((product) => {
    return {
      [AmplitudeEventProperty.itemId]: product.id,
      [AmplitudeEventProperty.itemName]: product.title,
      [AmplitudeEventProperty.index]: findIndex(PRODUCTS, product.id),
      [AmplitudeEventProperty.itemBrand]: product.brand,
      [AmplitudeEventProperty.itemCategory]: product.device,
      [AmplitudeEventProperty.itemVariant]: product.version,
      [AmplitudeEventProperty.price]: product.price,
      [AmplitudeEventProperty.stock]: product.stock,
    };
  });
  return productsRemapped;
};

/**
 * Re-map a products properties to Amplitude friendly keys
 * @param product a single product from the PRODUCTS object
 * @returns re-mapped Product object
 */
export const mapProductToAmplitudeProperties = (
  product: Product,
): AmplitudeProduct => {
  return {
    [AmplitudeEventProperty.itemId]: product.id,
    [AmplitudeEventProperty.itemName]: product.title,
    [AmplitudeEventProperty.index]: findIndex(PRODUCTS, product.id),
    [AmplitudeEventProperty.itemBrand]: product.brand,
    [AmplitudeEventProperty.itemCategory]: product.device,
    [AmplitudeEventProperty.itemVariant]: product.version,
    [AmplitudeEventProperty.price]: product.price,
    [AmplitudeEventProperty.stock]: product.stock,
  };
};

/**
 * Re-map the purchaseable products properties to Amplitude friendly keys
 * @param purchase a list of purchaseable products
 * @returns re-mapped Purchase object
 */
export const mapPurchasesToAmplitudeProperties = (
  purchase: Purchase[],
): AmplitudePurchase[] => {
  const purchaseRemapped = purchase.map((product) => {
    return {
      [AmplitudeEventProperty.itemId]: product.id,
      [AmplitudeEventProperty.itemName]: product.title,
      [AmplitudeEventProperty.index]: findIndex(PRODUCTS, product.id),
      [AmplitudeEventProperty.itemBrand]: product.brand,
      [AmplitudeEventProperty.itemCategory]: product.device,
      [AmplitudeEventProperty.itemVariant]: product.version,
      [AmplitudeEventProperty.price]: product.price,
      [AmplitudeEventProperty.quantity]: product.quantity,
    };
  });
  return purchaseRemapped;
};

/**
 * Re-map a purchaseable products properties to Amplitude friendly keys
 * @param purchase a single product for purchase
 * @returns re-mapped Purchase object
 */
export const mapPurchaseToAmplitudeProperties = (
  purchase: Purchase,
): AmplitudePurchase => {
  return {
    [AmplitudeEventProperty.itemId]: purchase.id,
    [AmplitudeEventProperty.itemName]: purchase.title,
    [AmplitudeEventProperty.index]: findIndex(PRODUCTS, purchase.id),
    [AmplitudeEventProperty.itemBrand]: purchase.brand,
    [AmplitudeEventProperty.itemCategory]: purchase.device,
    [AmplitudeEventProperty.itemVariant]: purchase.version,
    [AmplitudeEventProperty.price]: purchase.price,
    [AmplitudeEventProperty.quantity]: purchase.quantity,
  };
};

/**
 * Create event for Login, Sign Up, and Menu Views
 * @param isAuthenticated boolean value of users authentication status
 * @param loginMethod optional for now as "Email" is the only sign in option
 * Additionally this allows for reuse of this function for the Menu View and Sign Up events
 * @returns Amplitude Event
 */
export const createAmplitudeAuthEvent = (
  isAuthenticated: boolean,
  loginMethod?: string,
): AmplitudeAuthEvent => {
  // If the user has logged with the login method specified, then return this event
  if (loginMethod === "Email") {
    return {
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loginMethod]: loginMethod,
      [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    };
  }
  // Otherwise, the user is viewing the menu or signing up, so return this event
  else
    return {
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    };
};

/**
 * Create a page view event for the products screen
 * @param products a list of products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeViewItemListEvent = (
  products: Product[],
  isAuthenticated: boolean,
): AmplitudeViewItemListEvent => {
  return {
    [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    [AmplitudeEventProperty.itemListCount]: getCount(products),
    [AmplitudeEventProperty.listOfItems]: getProductList(products),
  };
};

/**
 * Create an event for selecting an item
 * @param product a product object
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeSelectItemEvent = (
  product: Product,
  isAuthenticated: boolean,
): AmplitudeSelectItemEvent => {
  const item = mapProductToAmplitudeProperties(product);

  return {
    ...item,
    [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
  };
};

/**
 * Create a page view event for a given item
 * @param product a product object
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeViewItemEvent = (
  product: Product,
  isAuthenticated: boolean,
): AmplitudeViewItemEvent => {
  const item = mapProductToAmplitudeProperties(product);

  return {
    ...item,
    [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
  };
};

/**
 * Create an event for adding or removing a purchase from the cart
 * @param purchase a purchase object
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeCartEvent = (
  purchase: Purchase,
  cart: Purchase[],
  isAuthenticated: boolean,
): AmplitudeCartActionEvent => {
  const item = mapPurchaseToAmplitudeProperties(purchase);

  return {
    ...item,
    [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    [AmplitudeEventProperty.itemCount]: getCartCount(cart),
    [AmplitudeEventProperty.updatedCartCost]: getTotalValue(cart),
    [AmplitudeEventProperty.listOfItems]: getProductList(cart),
  };
};

/**
 * Create a page view event for the e-commerce cart
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeViewCartEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
): AmplitudeViewCartEvent => {
  return {
    [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    [AmplitudeEventProperty.itemCount]: getCartCount(cart),
    [AmplitudeEventProperty.listOfItems]: getProductList(cart),
    [AmplitudeEventProperty.totalPrice]: getTotalValue(cart),
  };
};

/**
 * Create a purchase event
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @param buttonText the text of the button that triggered the event
 * @returns Amplitude Event
 */
export const createAmplitudePurchaseEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
  buttonText: ButtonText,
): AmplitudePurchaseEvent => {
  return {
    [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
    [AmplitudeEventProperty.currency]: getCurrency(),
    [AmplitudeEventProperty.totalPrice]: getTotalValue(cart),
    [AmplitudeEventProperty.transactionId]: uuidv4(),
    [AmplitudeEventProperty.products]: mapPurchasesToAmplitudeProperties(cart),
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    [AmplitudeEventProperty.triggerLocation]: buttonText,
    [AmplitudeEventProperty.itemCount]: getCartCount(cart),
  };
};

/**
 * Create a logout event
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeLogoutEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
): AmplitudeLogoutEvent => {
  return {
    [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
    [AmplitudeEventProperty.itemCount]: getCartCount(cart),
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
    [AmplitudeEventProperty.listOfItems]: getProductList(cart),
    [AmplitudeEventProperty.totalPrice]: getTotalValue(cart),
  };
};

/**
 * Create an error event for viewing the error screen
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAmplitudeErrorEvent = (
  isAuthenticated: boolean,
): AmplitudeErrorEvent => {
  return {
    [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
    [AmplitudeEventProperty.errorCode]: "404",
    [AmplitudeEventProperty.errorType]: "Page Not Found",
    [AmplitudeEventProperty.triggerLocation]: "Products Screen",
    [AmplitudeEventProperty.loggedIn]: isAuthenticated,
  };
};

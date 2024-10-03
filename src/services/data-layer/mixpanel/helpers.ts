import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { MixpanelEventProperty } from "services/analytics/mixpanel/constants";
import { AnalyticEventType } from "services/analytics/constants";
import { PRODUCTS, Product } from "services/data/products";
import {
  MixpanelProduct,
  MixpanelAuthEvent,
  MixpanelViewItemListEvent,
  MixpanelSelectItemEvent,
  MixpanelViewItemEvent,
  MixpanelViewCartEvent,
  MixpanelCartActionEvent,
  MixpanelPurchaseEvent,
  MixpanelErrorEvent,
  MixpanelLogoutEvent,
  MixpanelPurchase,
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
 * Re-map the product properties to Mixpanel friendly keys
 * @param products a list of products
 * @returns re-mapped Product object
 */
export const mapProductsToMixpanelProperties = (
  products: Product[],
): MixpanelProduct[] => {
  const productsRemapped = products.map((product) => {
    return {
      [MixpanelEventProperty.itemId]: product.id,
      [MixpanelEventProperty.itemName]: product.title,
      [MixpanelEventProperty.index]: findIndex(PRODUCTS, product.id),
      [MixpanelEventProperty.itemBrand]: product.brand,
      [MixpanelEventProperty.itemCategory]: product.device,
      [MixpanelEventProperty.itemVariant]: product.version,
      [MixpanelEventProperty.price]: product.price,
      [MixpanelEventProperty.stock]: product.stock,
    };
  });
  return productsRemapped;
};

/**
 * Re-map a products properties to Mixpanel friendly keys
 * @param product a single product from the PRODUCTS object
 * @returns re-mapped Product object
 */
export const mapProductToMixpanelProperties = (
  product: Product,
): MixpanelProduct => {
  return {
    [MixpanelEventProperty.itemId]: product.id,
    [MixpanelEventProperty.itemName]: product.title,
    [MixpanelEventProperty.index]: findIndex(PRODUCTS, product.id),
    [MixpanelEventProperty.itemBrand]: product.brand,
    [MixpanelEventProperty.itemCategory]: product.device,
    [MixpanelEventProperty.itemVariant]: product.version,
    [MixpanelEventProperty.price]: product.price,
    [MixpanelEventProperty.stock]: product.stock,
  };
};

/**
 * Re-map the purchaseable products properties to Mixpanel friendly keys
 * @param purchase a list of purchaseable products
 * @returns re-mapped Purchase object
 */
export const mapPurchasesToMixpanelProperties = (
  purchase: Purchase[],
): MixpanelPurchase[] => {
  const purchaseRemapped = purchase.map((product) => {
    return {
      [MixpanelEventProperty.itemId]: product.id,
      [MixpanelEventProperty.itemName]: product.title,
      [MixpanelEventProperty.index]: findIndex(PRODUCTS, product.id),
      [MixpanelEventProperty.itemBrand]: product.brand,
      [MixpanelEventProperty.itemCategory]: product.device,
      [MixpanelEventProperty.itemVariant]: product.version,
      [MixpanelEventProperty.price]: product.price,
      [MixpanelEventProperty.quantity]: product.quantity,
    };
  });
  return purchaseRemapped;
};

/**
 * Re-map a purchaseable products properties to Mixpanel friendly keys
 * @param cart a list of purchaseable products
 * @param purchase a single product for purchase
 * @returns re-mapped Purchase object
 */
export const mapPurchaseToMixpanelProperties = (
  purchase: Purchase,
): MixpanelPurchase => {
  return {
    [MixpanelEventProperty.itemId]: purchase.id,
    [MixpanelEventProperty.itemName]: purchase.title,
    [MixpanelEventProperty.index]: findIndex(PRODUCTS, purchase.id),
    [MixpanelEventProperty.itemBrand]: purchase.brand,
    [MixpanelEventProperty.itemCategory]: purchase.device,
    [MixpanelEventProperty.itemVariant]: purchase.version,
    [MixpanelEventProperty.price]: purchase.price,
    [MixpanelEventProperty.quantity]: purchase.quantity,
  };
};

/**
 * Create event for Login, Sign Up, and Menu Views
 * @param loginMethod optional for now as "Email" is the only sign in option
 * Additionally this allows for reuse of this function for the Menu View and Sign Up events
 * @returns Mixpanel Event
 */
export const createMixpanelAuthEvent = (
  loginMethod?: string,
): MixpanelAuthEvent => {
  // If the user has logged with the login method specified, then return this event
  if (loginMethod === "Email") {
    return {
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
      [MixpanelEventProperty.loginMethod]: loginMethod,
    };
  }
  // Otherwise, the user is viewing the menu or signing up, so return this event
  else
    return {
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    };
};

/**
 * Create a page view event for the products screen
 * @param products a list of products
 * @returns Mixpanel Event
 */
export const createMixpanelViewItemListEvent = (
  products: Product[],
): MixpanelViewItemListEvent => {
  return {
    [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
    [MixpanelEventProperty.itemListCount]: getCount(products),
    [MixpanelEventProperty.listOfItems]: getProductList(products),
  };
};

/**
 * Create an event for selecting an item
 * @param product a product object
 * @returns Mixpanel Event
 */
export const createMixpanelSelectItemEvent = (
  product: Product,
): MixpanelSelectItemEvent => {
  const item = mapProductToMixpanelProperties(product);

  return {
    ...item,
    [MixpanelEventProperty.eventType]: AnalyticEventType.action,
  };
};

/**
 * Create a page view event for a given item
 * @param product a product object
 * @returns Mixpanel Event
 */
export const createMixpanelViewItemEvent = (
  product: Product,
): MixpanelViewItemEvent => {
  const item = mapProductToMixpanelProperties(product);

  return {
    ...item,
    [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
  };
};

/**
 * Create an event for adding or removing a product from the cart
 * @param product a product object
 * @param cart a list of purchaseable products
 * @returns Mixpanel Event
 */
export const createMixpanelCartEvent = (
  product: Purchase,
  cart: Purchase[],
): MixpanelCartActionEvent => {
  const item = mapPurchaseToMixpanelProperties(product);

  return {
    ...item,
    [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    [MixpanelEventProperty.itemCount]: getCartCount(cart),
    [MixpanelEventProperty.updatedCartCost]: getTotalValue(cart),
    [MixpanelEventProperty.listOfItems]: getProductList(cart),
  };
};

/**
 * Create a page view event for the e-commerce cart
 * @param cart a list of purchaseable products
 * @returns Mixpanel Event
 */
export const createMixpanelViewCartEvent = (
  cart: Purchase[],
): MixpanelViewCartEvent => {
  return {
    [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
    [MixpanelEventProperty.itemCount]: getCartCount(cart),
    [MixpanelEventProperty.listOfItems]: getProductList(cart),
    [MixpanelEventProperty.totalPrice]: getTotalValue(cart),
  };
};

/**
 * Create a purchase event
 * @param cart a list of purchaseable products
 * @param buttonText the text of the button that triggered the event
 * @returns Mixpanel Event
 */
export const createMixpanelPurchaseEvent = (
  cart: Purchase[],
  buttonText: ButtonText,
): MixpanelPurchaseEvent => {
  return {
    [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    [MixpanelEventProperty.currency]: getCurrency(),
    [MixpanelEventProperty.totalPrice]: getTotalValue(cart),
    [MixpanelEventProperty.transactionId]: uuidv4(),
    [MixpanelEventProperty.listOfItems]: getProductList(cart),
    [MixpanelEventProperty.triggerLocation]: buttonText,
    [MixpanelEventProperty.itemCount]: getCartCount(cart),
    [MixpanelEventProperty.products]: mapPurchasesToMixpanelProperties(cart),
  };
};

/**
 * Create a logout event
 * @param cart a list of purchaseable products
 * @returns Mixpanel Event
 */
export const createMixpanelLogoutEvent = (
  cart: Purchase[],
): MixpanelLogoutEvent => {
  return {
    [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    [MixpanelEventProperty.itemCount]: getCartCount(cart),
    [MixpanelEventProperty.listOfItems]: getProductList(cart),
    [MixpanelEventProperty.totalPrice]: getTotalValue(cart),
  };
};

/**
 * Create an error event for viewing the error screen
 * @returns Mixpanel Event
 */
export const createMixpanelErrorEvent = (): MixpanelErrorEvent => {
  return {
    [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
    [MixpanelEventProperty.errorCode]: "404",
    [MixpanelEventProperty.errorType]: "Page Not Found",
    [MixpanelEventProperty.triggerLocation]: "Products Screen",
  };
};

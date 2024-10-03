import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { AdobeContextDataVariables } from "services/analytics/adobe/constants";
import { getCurrency } from "services/data/helpers";
import { Product } from "services/data/products";
import { Purchase } from "services/data/types";
import { Page } from "services/data/constants";
import { ButtonText } from "components/Button/constants";

/**
 * A string of a Products details which Adobe Analytics
 * requires in a very specific order for  E-commerce events
 * "Category;Product;Quantity;Price"
 * @param products a list of products
 * @returns
 */
export const createProductContextData = (item: Product): string => {
  const category = item.device ?? "";
  const product = item.title ?? "";
  const quantity = "";
  const price = item.price ?? "";
  return `${category};${product};${quantity};${price}`;
};

/**
 * A string of Product details which Adobe Analytics
 * requires in a very specific order for  E-commerce events
 * "Category;Product;Quantity;Price,Category;Product;Quantity;Price,"
 * @param products a list of products
 * @returns
 */
export const createProductsContextData = (products: Product[]): string => {
  let contextData: string[] = [];
  products.map((item) => {
    const category = item.device ?? "";
    const product = item.title ?? "";
    const quantity = "";
    const price = item.price ?? "";
    contextData.push(`${category};${product};${quantity};${price}`);
  });
  return contextData.toString();
};

/**
 * A string of a purchaseable products details which Adobe Analytics
 * requires in a very specific order for  E-commerce events
 * "Category;Product;Quantity;Price"
 * @param products a list of products
 * @returns
 */
export const createPurchaseContextData = (purchase: Purchase): string => {
  const category = purchase.device ?? "";
  const product = purchase.title ?? "";
  const quantity = purchase.quantity ?? "";
  const price = purchase.price ?? "";
  return `${category};${product};${quantity};${price}`;
};

/**
 * A string of purchasable product details which Adobe Analytics
 * requires in a very specific order for  E-commerce events
 * "Category;Product;Quantity;Price,Category;Product;Quantity;Price,"
 * @param products a list of products
 * @returns
 */
export const createPurchasesContextData = (purchases: Purchase[]): string => {
  let contextData: string[] = [];
  purchases.map((purchase) => {
    const category = purchase.device ?? "";
    const product = purchase.title ?? "";
    const quantity = purchase.quantity ?? "";
    const price = purchase.price ?? "";
    contextData.push(`${category};${product};${quantity};${price}`);
  });
  return contextData.toString();
};

/**
 * Create a trackAction for Sign Up
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeSignUpEvent = (
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.registration]: "1",
  };
};

/**
 * Create a trackAction for Login
 * @param isAuthenticated boolean value of users authentication status
 * @param loginMethod optional for now as "Email" is the only sign in option
 * @returns Amplitude Event
 */
export const createAdobeLoginEvent = (
  isAuthenticated: boolean,
  loginMethod: string,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loginMethod]: loginMethod,
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create a trackAction for Login
 * @param isAuthenticated boolean value of users authentication status
 * @returns Amplitude Event
 */
export const createAdobeMenuViewedEvent = (
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
  };
};

/**
 * Create a trackState for the products screen
 * @param products a list of products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeViewItemListEvent = (
  products: Product[],
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.page]: Page.viewItemList,
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createProductsContextData(products),
  };
};

/**
 * Create a trackAction for selecting an item
 * @param product a product object
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeSelectItemEvent = (
  product: Product,
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createProductContextData(product),
    [AdobeContextDataVariables.itemId]: product.id,
    [AdobeContextDataVariables.itemBrand]: product.brand,
    [AdobeContextDataVariables.itemVariant]: product.version,
  };
};

/**
 * Create a trackState view item event for a given item
 * @param product a product object
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeViewItemEvent = (
  product: Product,
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.page]: Page.viewItem,
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createProductContextData(product),
    [AdobeContextDataVariables.itemId]: product.id,
    [AdobeContextDataVariables.itemBrand]: product.brand,
    [AdobeContextDataVariables.itemVariant]: product.version,
    [AdobeContextDataVariables.viewProduct]: "1",
  };
};

/**
 * Create a trackAction for adding a purchase from the cart
 * @param purchase a purchase object
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeAddToCartEvent = (
  purchase: Purchase,
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createPurchaseContextData(purchase),
    [AdobeContextDataVariables.itemId]: purchase.id,
    [AdobeContextDataVariables.itemBrand]: purchase.brand,
    [AdobeContextDataVariables.itemVariant]: purchase.version,
    [AdobeContextDataVariables.cartAddition]: "1",
  };
};

/**
 * Create a trackAction for removing a purchase from the cart
 * @param purchase a purchase object
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeRemoveFromCartEvent = (
  purchase: Purchase,
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createPurchaseContextData(purchase),
    [AdobeContextDataVariables.itemId]: purchase.id,
    [AdobeContextDataVariables.itemBrand]: purchase.brand,
    [AdobeContextDataVariables.itemVariant]: purchase.version,
    [AdobeContextDataVariables.cartRemoval]: "1",
  };
};

/**
 * Create a trackState for the e-commerce cart
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeViewCartEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.page]: Page.viewCart,
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createPurchasesContextData(cart),
    [AdobeContextDataVariables.cartView]: "1",
  };
};

/**
 * Create a trackAction purchase event
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @param buttonText the text of the button that triggered the event
 * @returns Adobe Event
 */
export const createAdobePurchaseEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
  buttonText: ButtonText,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createPurchasesContextData(cart),
    [AdobeContextDataVariables.purchaseId]: uuidv4(),
    [AdobeContextDataVariables.purchase]: "1",
    [AdobeContextDataVariables.triggerLocation]: buttonText,
  };
};

/**
 * Create a trackAction logout event
 * @param cart a list of purchaseable products
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeLogoutEvent = (
  cart: Purchase[],
  isAuthenticated: boolean,
): Record<string, string> => {
  return {
    [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
    [AdobeContextDataVariables.currencyCode]: getCurrency(),
    [AdobeContextDataVariables.products]: createPurchasesContextData(cart),
  };
};

/**
 * Create a trackAction custom error event
 * @param isAuthenticated boolean value of users authentication status
 * @returns Adobe Event
 */
export const createAdobeErrorEvent = (
  isAuthenticated: boolean,
  isAction: boolean,
): Record<string, string> => {
  if (isAction) {
    return {
      [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
      [AdobeContextDataVariables.errorCode]: "404",
      [AdobeContextDataVariables.errorType]: "Page Not Found",
      [AdobeContextDataVariables.triggerLocation]: "Products Screen",
    };
  } else {
    return {
      [AdobeContextDataVariables.loggedIn]: isAuthenticated.toString(),
      [AdobeContextDataVariables.errorCode]: "404",
      [AdobeContextDataVariables.page]: Page.customError,
      [AdobeContextDataVariables.errorType]: "Page Not Found",
      [AdobeContextDataVariables.triggerLocation]: "Products Screen",
    };
  }
};

import Constants from "expo-constants";

// Use expoConfig to build with API keys from app.config.ts
export const ADOBE_API_KEY = Constants.expoConfig?.extra?.ADOBE_API_KEY;

/**
 * The analytic event as outlined in the Spec Sheet.
 */
export enum AdobeEventTrigger {
  signUp = "Sign Up",
  login = "Login",
  menuViewed = "Menu Viewed",
  viewItemList = "View Item List",
  selectItem = "Select Item",
  viewItem = "View Item",
  addToCart = "Add to Cart",
  removeFromCart = "Remove from Cart",
  viewCart = "View Cart",
  purchase = "Purchase",
  logout = "Logout",
  error = "Custom Error",
}

/**
 * The prop name for analytic events outlined in the Spec Sheet.
 * These values need to match the values in the Spec Sheet in
 * order for the data to be properly mapped on an analytics dashboard.
 */
export enum AdobeEventProperty {
  eventType = "Event Type",
  loginMethod = "Login Method",
  itemListCount = "Item List Count",
  listOfItems = "List of Items",
  itemId = "Item ID",
  itemName = "Item Name",
  index = "Index",
  itemBrand = "Item Brand",
  itemCategory = "Item Category",
  itemVariant = "Item Variant",
  price = "Price",
  stock = "Stock",
  quantity = "Quantity",
  itemCount = "Item Count",
  updatedCartCost = "Updated Cart Cost",
  currency = "Currency",
  transactionId = "Transaction ID",
  totalPrice = "Total Price",
  triggerLocation = "Trigger Location",
  errorCode = "Error Code",
  errorType = "Error Type",
  products = "Products",
}

export enum AdobeContextDataVariables {
  loggedIn = "rnza.loggedIn",
  registration = "rnza.registration",
  loginMethod = "rnza.loginMethod",
  page = "rnza.page",
  currencyCode = "rnza.currencyCode",
  products = "&&products",
  itemId = "rnza.itemID",
  itemBrand = "rnza.itemBrand",
  itemVariant = "rnza.itemVariant",
  viewProduct = "rnza.viewProduct",
  cartAddition = "rnza.cartAddition",
  cartRemoval = "rnza.cartRemoval",
  cartView = "rnza.cartView",
  purchaseId = "rnza.purchaseid",
  purchase = "rnza.purchase",
  errorCode = "rnza.errorCode",
  errorType = "rnza.errorType",
  triggerLocation = "rnza.triggerLocation",
}

/**
 * Adobe Lifecycle Metrics
 * https://developer.adobe.com/client-sdks/documentation/mobile-core/lifecycle/event-reference/
 */
export enum AdobeLifecycleMetric {
  loggedIn = "Logged In",
}

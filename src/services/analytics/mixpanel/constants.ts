import Constants from "expo-constants";

// Use expoConfig to build with API keys from app.config.ts
export const MIXPANEL_API_KEY = Constants.expoConfig?.extra?.MIXPANEL_API_KEY;

/**
 * The analytic event as outlined in the Spec Sheet.
 */
export enum MixpanelEventTrigger {
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
export enum MixpanelEventProperty {
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

/**
 * Mixpanel Super Properties
 * The prop name for analytic events outlined in the Spec Sheet.
 * https://developer.mixpanel.com/docs/react-native#super-properties
 */
export enum MixpanelSuperProperty {
  loggedIn = "Logged In",
}

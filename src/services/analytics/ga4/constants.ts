/**
 * The analytic event trigger for GA4 as outlined in the Spec Sheet.
 */
export enum GA4EventTrigger {
  signUp = "sign_up",
  login = "login",
  menuViewed = "menu_viewed",
  viewItemList = "view_item_list",
  selectItem = "select_item",
  viewItem = "view_item",
  addToCart = "add_to_cart",
  removeFromCart = "remove_from_cart",
  viewCart = "view_cart",
  purchase = "purchase",
  logout = "logout",
  error = "custom_error",
}

/**
 * The prop name for GA4 analytic events as outlined in the Spec Sheet.
 * These values need to match the values in the Spec Sheet in
 * order for the data to be properly mapped on an analytics dashboard.
 * item_id, item_name, currency, transaction_id, and value are required
 */
export enum GA4EventProperty {
  items = "items",
  itemId = "item_id",
  itemName = "item_name",
  index = "index",
  itemBrand = "item_brand",
  itemCategory = "item_category",
  itemVariant = "item_variant",
  price = "price",
  stock = "stock",
  quantity = "quantity",
  currency = "currency",
  transactionId = "transaction_id",
  value = "value",
  errorCode = "error_code",
  errorType = "error_type",
  triggerLocation = "trigger_location",
  loggedIn = "logged_in",
  loginMethod = "login_method",
  itemCount = "item_count",
}

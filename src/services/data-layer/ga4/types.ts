/* istanbul ignore file */
import { ButtonText } from "components/Button/constants";
import { GA4EventProperty } from "services/analytics/ga4/constants";
import { Title, Version, Device, Currency } from "services/data/constants";
import { Brand } from "services/data/types";

export interface GA4Product {
  [GA4EventProperty.itemId]: string;
  [GA4EventProperty.itemName]: Title;
  [GA4EventProperty.index]: number;
  [GA4EventProperty.itemBrand]: Brand;
  [GA4EventProperty.itemCategory]: Device;
  [GA4EventProperty.itemVariant]: Version;
  [GA4EventProperty.price]: number;
  [GA4EventProperty.stock]: number;
}

export interface GA4Purchase {
  [GA4EventProperty.itemId]: string;
  [GA4EventProperty.itemName]: Title;
  [GA4EventProperty.index]: number;
  [GA4EventProperty.itemBrand]: Brand;
  [GA4EventProperty.itemCategory]: Device;
  [GA4EventProperty.itemVariant]: Version;
  [GA4EventProperty.price]: number;
  [GA4EventProperty.quantity]: number;
}

export interface GA4AuthEvent {
  [GA4EventProperty.loggedIn]: string;
  [GA4EventProperty.loginMethod]?: "Email";
}

// Used for view_item_list and select_item
export interface GA4ProductsEvent {
  [GA4EventProperty.items]: GA4Product[];
  [GA4EventProperty.loggedIn]: string;
}

// Used for view_item
export interface GA4ProductEvent extends GA4ProductsEvent {
  [GA4EventProperty.currency]: Currency;
  [GA4EventProperty.value]: number;
}

// Used for add_to_cart, remove_from_cart, and view_cart
export interface GA4ProductsPurchasedEvent {
  [GA4EventProperty.currency]: Currency;
  [GA4EventProperty.value]: number;
  [GA4EventProperty.items]: GA4Purchase[];
  [GA4EventProperty.loggedIn]: string;
}

export interface GA4PurchaseEvent extends GA4ProductsPurchasedEvent {
  [GA4EventProperty.transactionId]: string;
  [GA4EventProperty.triggerLocation]: ButtonText;
}

export interface GA4LogoutEvent {
  [GA4EventProperty.itemCount]: number;
  [GA4EventProperty.loggedIn]: string;
}

export interface GA4ErrorEvent {
  [GA4EventProperty.errorCode]: string;
  [GA4EventProperty.errorType]: string;
  [GA4EventProperty.triggerLocation]: string;
  [GA4EventProperty.loggedIn]: string;
}

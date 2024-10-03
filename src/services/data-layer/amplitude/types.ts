/* istanbul ignore file */
import { AmplitudeEventProperty } from "services/analytics/amplitude/constants";
import { AnalyticEventType } from "services/analytics/constants";
import { Title, Version, Device, Currency } from "services/data/constants";
import { Brand } from "services/data/types";
import { ButtonText } from "components/Button/constants";

interface AmplitudeProductProperties {
  [AmplitudeEventProperty.itemId]: string;
  [AmplitudeEventProperty.itemName]: Title;
  [AmplitudeEventProperty.index]: number;
  [AmplitudeEventProperty.itemBrand]: Brand;
  [AmplitudeEventProperty.itemCategory]: Device;
  [AmplitudeEventProperty.itemVariant]: Version;
  [AmplitudeEventProperty.price]: number;
}

export interface AmplitudeProduct extends AmplitudeProductProperties {
  [AmplitudeEventProperty.stock]: number;
}

export interface AmplitudePurchase extends AmplitudeProductProperties {
  [AmplitudeEventProperty.quantity]: number;
}

export interface AmplitudeAuthEvent {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.action;
  [AmplitudeEventProperty.loggedIn]: boolean;
  [AmplitudeEventProperty.loginMethod]?: "Email";
}

export interface AmplitudeViewItemListEvent {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.screen;
  [AmplitudeEventProperty.loggedIn]: boolean;
  [AmplitudeEventProperty.itemListCount]: number;
  [AmplitudeEventProperty.listOfItems]: string[];
}

export interface AmplitudeSelectItemEvent extends AmplitudeProduct {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.action;
  [AmplitudeEventProperty.loggedIn]: boolean;
}

export interface AmplitudeViewItemEvent extends AmplitudeProduct {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.screen;
  [AmplitudeEventProperty.loggedIn]: boolean;
}

// Used for Add to Cart, and Remove from Cart
export interface AmplitudeCartActionEvent extends AmplitudePurchase {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.action;
  [AmplitudeEventProperty.loggedIn]: boolean;
  [AmplitudeEventProperty.itemCount]: number;
  [AmplitudeEventProperty.updatedCartCost]: number;
  [AmplitudeEventProperty.listOfItems]: string[];
}

export interface AmplitudeViewCartEvent {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.screen;
  [AmplitudeEventProperty.loggedIn]: boolean;
  [AmplitudeEventProperty.itemCount]: number;
  [AmplitudeEventProperty.listOfItems]: string[];
  [AmplitudeEventProperty.totalPrice]: number;
}

export interface AmplitudePurchaseEvent {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.action;
  [AmplitudeEventProperty.currency]: Currency;
  [AmplitudeEventProperty.transactionId]: string;
  [AmplitudeEventProperty.totalPrice]: number;
  [AmplitudeEventProperty.products]: AmplitudePurchase[];
  [AmplitudeEventProperty.loggedIn]: boolean;
  [AmplitudeEventProperty.triggerLocation]: ButtonText;
  [AmplitudeEventProperty.itemCount]: number;
}

export interface AmplitudeLogoutEvent {
  [AmplitudeEventProperty.eventType]: AnalyticEventType.action;
  [AmplitudeEventProperty.itemCount]: number;
  [AmplitudeEventProperty.loggedIn]: boolean;
  [AmplitudeEventProperty.listOfItems]: string[];
  [AmplitudeEventProperty.totalPrice]: number;
}

export interface AmplitudeErrorEvent {
  [AmplitudeEventProperty.eventType]: AnalyticEventType;
  [AmplitudeEventProperty.errorCode]: string;
  [AmplitudeEventProperty.errorType]: string;
  [AmplitudeEventProperty.triggerLocation]: string;
  [AmplitudeEventProperty.loggedIn]: boolean;
}

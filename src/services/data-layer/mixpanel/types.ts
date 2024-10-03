/* istanbul ignore file */
import { MixpanelEventProperty } from "services/analytics/mixpanel/constants";
import { AnalyticEventType } from "services/analytics/constants";
import { Title, Version, Device, Currency } from "services/data/constants";
import { Brand } from "services/data/types";
import { ButtonText } from "components/Button/constants";

interface MixpanelProductProperties {
  [MixpanelEventProperty.itemId]: string;
  [MixpanelEventProperty.itemName]: Title;
  [MixpanelEventProperty.index]: number;
  [MixpanelEventProperty.itemBrand]: Brand;
  [MixpanelEventProperty.itemCategory]: Device;
  [MixpanelEventProperty.itemVariant]: Version;
  [MixpanelEventProperty.price]: number;
}

export interface MixpanelProduct extends MixpanelProductProperties {
  [MixpanelEventProperty.stock]: number;
}

export interface MixpanelPurchase extends MixpanelProductProperties {
  [MixpanelEventProperty.quantity]: number;
}

export interface MixpanelAuthEvent {
  [MixpanelEventProperty.eventType]: AnalyticEventType.action;
  [MixpanelEventProperty.loginMethod]?: "Email";
}

export interface MixpanelViewItemListEvent {
  [MixpanelEventProperty.eventType]: AnalyticEventType.screen;
  [MixpanelEventProperty.itemListCount]: number;
  [MixpanelEventProperty.listOfItems]: string[];
}

export interface MixpanelSelectItemEvent extends MixpanelProduct {
  [MixpanelEventProperty.eventType]: AnalyticEventType.action;
}

export interface MixpanelViewItemEvent extends MixpanelProduct {
  [MixpanelEventProperty.eventType]: AnalyticEventType.screen;
}

// Used for Add to Cart and Remove from Cart
export interface MixpanelCartActionEvent extends MixpanelPurchase {
  [MixpanelEventProperty.eventType]: AnalyticEventType.action;
  [MixpanelEventProperty.itemCount]: number;
  [MixpanelEventProperty.updatedCartCost]: number;
  [MixpanelEventProperty.listOfItems]: string[];
}

export interface MixpanelViewCartEvent {
  [MixpanelEventProperty.eventType]: AnalyticEventType.screen;
  [MixpanelEventProperty.itemCount]: number;
  [MixpanelEventProperty.listOfItems]: string[];
  [MixpanelEventProperty.totalPrice]: number;
}

export interface MixpanelPurchaseEvent {
  [MixpanelEventProperty.eventType]: AnalyticEventType.action;
  [MixpanelEventProperty.currency]: Currency;
  [MixpanelEventProperty.transactionId]: string;
  [MixpanelEventProperty.triggerLocation]: ButtonText;
  [MixpanelEventProperty.itemCount]: number;
  [MixpanelEventProperty.listOfItems]: string[];
  [MixpanelEventProperty.totalPrice]: number;
  [MixpanelEventProperty.products]: MixpanelPurchase[];
}

export interface MixpanelLogoutEvent {
  [MixpanelEventProperty.eventType]: AnalyticEventType.action;
  [MixpanelEventProperty.itemCount]: number;
  [MixpanelEventProperty.listOfItems]: string[];
  [MixpanelEventProperty.totalPrice]: number;
}

export interface MixpanelErrorEvent {
  [MixpanelEventProperty.eventType]: AnalyticEventType;
  [MixpanelEventProperty.errorCode]: string;
  [MixpanelEventProperty.errorType]: string;
  [MixpanelEventProperty.triggerLocation]: string;
}

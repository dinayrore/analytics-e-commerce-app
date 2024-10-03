/**
 * @file Helper Methods for handling Analytic Events
 * @description GA4, Amplitude, Mixpanel, and Adobe analytic events
 * are all created under one parent function. This allows all
 * four analytic services to be called from one instance.
 */
import {
  createAmplitudeAuthEvent,
  createAmplitudeCartEvent,
  createAmplitudeViewCartEvent,
  createAmplitudeErrorEvent,
  createAmplitudeLogoutEvent,
  createAmplitudePurchaseEvent,
  createAmplitudeViewItemEvent,
  createAmplitudeViewItemListEvent,
  createAmplitudeSelectItemEvent,
} from "services/data-layer/amplitude/helpers";
import {
  createGA4AuthEvent,
  createGA4CartEvent,
  createGA4ErrorEvent,
  createGA4LogoutEvent,
  createGA4PurchaseEvent,
  createGA4RemoveFromCartEvent,
  createGA4SelectItemEvent,
  createGA4ViewItemEvent,
  createGA4ViewItemListEvent,
} from "services/data-layer/ga4/helpers";
import { Product } from "services/data/products";
import { AmplitudeEventTrigger } from "./amplitude/constants";
import { sendAmplitudeEvent } from "./amplitude/events";
import { GA4EventTrigger } from "./ga4/constants";
import { sendGA4Event } from "./ga4/events";
import { ButtonText } from "components/Button/constants";
import { sendMixpanelEvent } from "./mixpanel/events";
import { MixpanelEventTrigger } from "./mixpanel/constants";
import {
  createMixpanelAuthEvent,
  createMixpanelCartEvent,
  createMixpanelErrorEvent,
  createMixpanelLogoutEvent,
  createMixpanelPurchaseEvent,
  createMixpanelSelectItemEvent,
  createMixpanelViewCartEvent,
  createMixpanelViewItemEvent,
  createMixpanelViewItemListEvent,
} from "services/data-layer/mixpanel/helpers";
import { Purchase, User } from "services/data/types";
import { sendAdobeTrackAction, sendAdobeTrackState } from "./adobe/events";
import { AdobeEventTrigger } from "./adobe/constants";
import {
  createAdobeAddToCartEvent,
  createAdobeErrorEvent,
  createAdobeLoginEvent,
  createAdobeLogoutEvent,
  createAdobeMenuViewedEvent,
  createAdobePurchaseEvent,
  createAdobeRemoveFromCartEvent,
  createAdobeSelectItemEvent,
  createAdobeSignUpEvent,
  createAdobeViewCartEvent,
  createAdobeViewItemEvent,
  createAdobeViewItemListEvent,
} from "services/data-layer/adobe/helpers";

import { RootStackRouteNames } from "navigation/constants";
import { createSnowplowProductContext } from "services/data-layer/snowplow/helpers";
import {
  sendSnowplowScreenViewEvent,
  sendSnowplowAddToCartEvent,
  sendSnowplowCheckoutEvent,
  sendSnowplowAddToCartStructuredEvent,
} from "services/snowplow/helpers";

export const sendAnalyticsSignUpEvents = (isAuthenticated: boolean) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.signUp,
    createAmplitudeAuthEvent(isAuthenticated),
  );

  sendGA4Event(GA4EventTrigger.signUp, createGA4AuthEvent(isAuthenticated));

  sendMixpanelEvent(MixpanelEventTrigger.signUp, createMixpanelAuthEvent());

  sendAdobeTrackAction(
    AdobeEventTrigger.signUp,
    createAdobeSignUpEvent(isAuthenticated),
  );

  sendSnowplowScreenViewEvent({
    name: RootStackRouteNames.RegisterScreenName,
    previousName: RootStackRouteNames.LoginScreenName,
  });
};

export const sendAnalyticsLoginEvents = (
  isAuthenticated: boolean,
  loginMethod: string,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.login,
    createAmplitudeAuthEvent(isAuthenticated, loginMethod),
  );

  sendGA4Event(
    GA4EventTrigger.login,
    createGA4AuthEvent(isAuthenticated, loginMethod),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.login,
    createMixpanelAuthEvent(loginMethod),
  );

  sendAdobeTrackAction(
    AdobeEventTrigger.login,
    createAdobeLoginEvent(isAuthenticated, loginMethod),
  );

  sendSnowplowScreenViewEvent({
    name: RootStackRouteNames.LoginScreenName,
  });
};

export const sendAnalyticsMenuViewedEvents = (isAuthenticated: boolean) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.menuViewed,
    createAmplitudeAuthEvent(isAuthenticated),
  );

  sendGA4Event(GA4EventTrigger.menuViewed, createGA4AuthEvent(isAuthenticated));

  sendMixpanelEvent(MixpanelEventTrigger.menuViewed, createMixpanelAuthEvent());

  sendAdobeTrackAction(
    AdobeEventTrigger.menuViewed,
    createAdobeMenuViewedEvent(isAuthenticated),
  );
};

export const sendAnalyticsViewItemListEvents = (
  products: Product[],
  isAuthenticated: boolean,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.viewItemList,
    createAmplitudeViewItemListEvent(products, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.viewItemList,
    createGA4ViewItemListEvent(products, isAuthenticated),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.viewItemList,
    createMixpanelViewItemListEvent(products),
  );

  sendAdobeTrackState(
    AdobeEventTrigger.viewItemList,
    createAdobeViewItemListEvent(products, isAuthenticated),
  );

  sendSnowplowScreenViewEvent({ name: RootStackRouteNames.ProductsScreenName });
};

export const sendAnalyticsSelectItemEvents = (
  product: Product,
  isAuthenticated: boolean,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.selectItem,
    createAmplitudeSelectItemEvent(product, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.selectItem,
    createGA4SelectItemEvent(product, isAuthenticated),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.selectItem,
    createMixpanelSelectItemEvent(product),
  );

  sendAdobeTrackAction(
    AdobeEventTrigger.selectItem,
    createAdobeSelectItemEvent(product, isAuthenticated),
  );
};

export const sendAnalyticsViewItemEvents = (
  product: Product,
  isAuthenticated: boolean,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.viewItem,
    createAmplitudeViewItemEvent(product, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.viewItem,
    createGA4ViewItemEvent(product, isAuthenticated),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.viewItem,
    createMixpanelViewItemEvent(product),
  );

  sendAdobeTrackState(
    AdobeEventTrigger.viewItem,
    createAdobeViewItemEvent(product, isAuthenticated),
  );

  sendSnowplowScreenViewEvent({
    name: RootStackRouteNames.ProductDetailsScreenName,
    previousName: RootStackRouteNames.ProductsScreenName,
    context: createSnowplowProductContext(product),
  });
};

export const sendAnalyticsAddToCartEvents = (
  purchase: Purchase,
  productsInCart: Purchase[],
  isAuthenticated: boolean,
  user: User | null,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.addToCart,
    createAmplitudeCartEvent(purchase, productsInCart, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.addToCart,
    createGA4CartEvent(productsInCart, isAuthenticated),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.addToCart,
    createMixpanelCartEvent(purchase, productsInCart),
  );

  sendAdobeTrackAction(
    AdobeEventTrigger.addToCart,
    createAdobeAddToCartEvent(purchase, isAuthenticated),
  );

  sendSnowplowAddToCartEvent(purchase, user);
  sendSnowplowAddToCartStructuredEvent(purchase, productsInCart);
};

export const sendAnalyticsRemoveFromCartEvents = (
  productTapped: Purchase,
  productsInCart: Purchase[],
  isAuthenticated: boolean,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.removeFromCart,
    createAmplitudeCartEvent(productTapped, productsInCart, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.removeFromCart,
    createGA4RemoveFromCartEvent(
      productTapped,
      productsInCart,
      isAuthenticated,
    ),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.removeFromCart,
    createMixpanelCartEvent(productTapped, productsInCart),
  );

  sendAdobeTrackAction(
    AdobeEventTrigger.removeFromCart,
    createAdobeRemoveFromCartEvent(productTapped, isAuthenticated),
  );
};

export const sendAnalyticsViewCartEvents = (
  cart: Purchase[],
  isAuthenticated: boolean,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.viewCart,
    createAmplitudeViewCartEvent(cart, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.viewCart,
    createGA4CartEvent(cart, isAuthenticated),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.viewCart,
    createMixpanelViewCartEvent(cart),
  );

  sendAdobeTrackState(
    AdobeEventTrigger.viewCart,
    createAdobeViewCartEvent(cart, isAuthenticated),
  );

  sendSnowplowScreenViewEvent({
    name: RootStackRouteNames.ShoppingCartScreenName,
  });
};

export const sendAnalyticsCheckoutEvents = (
  purchase: Purchase[],
  isAuthenticated: boolean,
  buttonText: ButtonText,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.purchase,
    createAmplitudePurchaseEvent(purchase, isAuthenticated, buttonText),
  );

  sendGA4Event(
    GA4EventTrigger.purchase,
    createGA4PurchaseEvent(purchase, isAuthenticated, buttonText),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.purchase,
    createMixpanelPurchaseEvent(purchase, buttonText),
  );

  sendAdobeTrackAction(
    AdobeEventTrigger.purchase,
    createAdobePurchaseEvent(purchase, isAuthenticated, buttonText),
  );

  sendSnowplowCheckoutEvent(purchase);

  sendSnowplowScreenViewEvent({
    name: RootStackRouteNames.CheckoutScreenName,
    previousName:
      buttonText === ButtonText.checkout
        ? RootStackRouteNames.ShoppingCartScreenName
        : RootStackRouteNames.ProductDetailsScreenName,
  });
};

export const sendAnalyticsLogoutEvents = (
  cart: Purchase[],
  isAuthenticated: boolean,
) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.logout,
    createAmplitudeLogoutEvent(cart, isAuthenticated),
  );

  sendGA4Event(
    GA4EventTrigger.logout,
    createGA4LogoutEvent(cart, isAuthenticated),
  );

  sendMixpanelEvent(
    MixpanelEventTrigger.logout,
    createMixpanelLogoutEvent(cart),
  );

  sendAdobeTrackAction(
    AdobeEventTrigger.logout,
    createAdobeLogoutEvent(cart, isAuthenticated),
  );
};

export const sendAnalyticsErrorEvents = (isAuthenticated: boolean) => {
  sendAmplitudeEvent(
    AmplitudeEventTrigger.error,
    createAmplitudeErrorEvent(isAuthenticated),
  );

  sendGA4Event(GA4EventTrigger.error, createGA4ErrorEvent(isAuthenticated));

  sendMixpanelEvent(MixpanelEventTrigger.error, createMixpanelErrorEvent());

  sendAdobeTrackAction(
    AdobeEventTrigger.error,
    createAdobeErrorEvent(isAuthenticated, true),
  );
  sendAdobeTrackState(
    AdobeEventTrigger.error,
    createAdobeErrorEvent(isAuthenticated, false),
  );

  sendSnowplowScreenViewEvent({
    name: RootStackRouteNames.ErrorScreenName,
    previousName: RootStackRouteNames.ProductsScreenName,
  });
};

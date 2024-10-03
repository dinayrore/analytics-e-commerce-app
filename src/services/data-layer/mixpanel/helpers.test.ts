import { ButtonText } from "components/Button/constants";
import { MixpanelEventProperty } from "services/analytics/mixpanel/constants";
import { AnalyticEventType } from "services/analytics/constants";
import {
  getCurrency,
  findIndex,
  getProductList,
  getTotalValue,
} from "services/data/helpers";
import { PRODUCTS } from "services/data/products";
import {
  createMixpanelAuthEvent,
  createMixpanelViewItemListEvent,
  mapProductsToMixpanelProperties,
  createMixpanelSelectItemEvent,
  mapProductToMixpanelProperties,
  createMixpanelViewItemEvent,
  createMixpanelViewCartEvent,
  createMixpanelPurchaseEvent,
  createMixpanelLogoutEvent,
  createMixpanelErrorEvent,
  createMixpanelCartEvent,
  mapPurchaseToMixpanelProperties,
  mapPurchasesToMixpanelProperties,
} from "./helpers";
import { Title, Device, Version } from "services/data/constants";
import {
  TEST_FEWER_PRODUCTS,
  TEST_PRODUCT,
  TEST_PRODUCTS,
  TEST_PURCHASE,
  TEST_PURCHASES,
} from "jest/constants";
import { getCartCount } from "contexts/shopping-cart/helpers";

describe("Mixpanel Analytics Data Layer", () => {
  it("returns a re-mapped product object with Mixpanel friendly keys", () => {
    const event = mapProductToMixpanelProperties(TEST_PRODUCT);
    const index = findIndex(PRODUCTS, TEST_PRODUCT.id);

    expect(event).toEqual({
      [MixpanelEventProperty.itemId]: TEST_PRODUCT.id,
      [MixpanelEventProperty.itemName]: TEST_PRODUCT.title,
      [MixpanelEventProperty.index]: index,
      [MixpanelEventProperty.itemBrand]: TEST_PRODUCT.brand,
      [MixpanelEventProperty.itemCategory]: TEST_PRODUCT.device,
      [MixpanelEventProperty.itemVariant]: TEST_PRODUCT.version,
      [MixpanelEventProperty.price]: TEST_PRODUCT.price,
      [MixpanelEventProperty.stock]: TEST_PRODUCT.stock,
    });
  });

  it("returns a re-mapped products object with Mixpanel friendly keys", () => {
    const event = mapProductsToMixpanelProperties(TEST_FEWER_PRODUCTS);

    expect(event).toEqual([
      {
        [MixpanelEventProperty.itemId]: "10",
        [MixpanelEventProperty.itemName]: Title.OOT,
        [MixpanelEventProperty.index]: 6,
        [MixpanelEventProperty.itemBrand]: "Nintendo",
        [MixpanelEventProperty.itemCategory]: Device.n64,
        [MixpanelEventProperty.itemVariant]: Version.physical,
        [MixpanelEventProperty.price]: 39.99,
        [MixpanelEventProperty.stock]: 6,
      },
      {
        [MixpanelEventProperty.itemId]: "30",
        [MixpanelEventProperty.itemName]: Title.ALBW,
        [MixpanelEventProperty.index]: 1,
        [MixpanelEventProperty.itemBrand]: "Nintendo",
        [MixpanelEventProperty.itemCategory]: Device.ds,
        [MixpanelEventProperty.itemVariant]: Version.physical,
        [MixpanelEventProperty.price]: 49.99,
        [MixpanelEventProperty.stock]: 3,
      },
      {
        [MixpanelEventProperty.itemId]: "11",
        [MixpanelEventProperty.itemName]: Title.majorasMask,
        [MixpanelEventProperty.index]: 7,
        [MixpanelEventProperty.itemBrand]: "Nintendo",
        [MixpanelEventProperty.itemCategory]: Device.n64,
        [MixpanelEventProperty.itemVariant]: Version.physical,
        [MixpanelEventProperty.price]: 49.99,
        [MixpanelEventProperty.stock]: 7,
      },
    ]);
  });

  it("returns a re-mapped purchase object with Mixpanel friendly keys", () => {
    const event = mapPurchaseToMixpanelProperties(TEST_PURCHASE);
    const index = findIndex(TEST_PRODUCTS, TEST_PURCHASE.id);

    expect(event).toEqual({
      [MixpanelEventProperty.itemId]: TEST_PURCHASE.id,
      [MixpanelEventProperty.itemName]: TEST_PURCHASE.title,
      [MixpanelEventProperty.index]: index,
      [MixpanelEventProperty.itemBrand]: TEST_PURCHASE.brand,
      [MixpanelEventProperty.itemCategory]: TEST_PURCHASE.device,
      [MixpanelEventProperty.itemVariant]: TEST_PURCHASE.version,
      [MixpanelEventProperty.price]: TEST_PURCHASE.price,
      [MixpanelEventProperty.quantity]: TEST_PURCHASE.quantity,
    });
  });

  it("returns re-mapped purchased object with Mixpanel friendly keys", () => {
    const event = mapPurchasesToMixpanelProperties(TEST_PURCHASES);

    expect(event).toEqual([
      {
        [MixpanelEventProperty.itemId]: "11",
        [MixpanelEventProperty.itemName]: Title.majorasMask,
        [MixpanelEventProperty.index]: 7,
        [MixpanelEventProperty.itemBrand]: "Nintendo",
        [MixpanelEventProperty.itemCategory]: Device.n64,
        [MixpanelEventProperty.itemVariant]: Version.physical,
        [MixpanelEventProperty.price]: 49.99,
        [MixpanelEventProperty.quantity]: 2,
      },
      {
        [MixpanelEventProperty.itemId]: "3",
        [MixpanelEventProperty.itemName]: Title.ALTTP,
        [MixpanelEventProperty.index]: 8,
        [MixpanelEventProperty.itemBrand]: "Nintendo",
        [MixpanelEventProperty.itemCategory]: Device.snes,
        [MixpanelEventProperty.itemVariant]: Version.physical,
        [MixpanelEventProperty.price]: 59.99,
        [MixpanelEventProperty.quantity]: 1,
      },
    ]);
  });
  it("returns a Sign Up event", () => {
    const event = createMixpanelAuthEvent();

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    });
  });

  it("returns a Login event", () => {
    const event = createMixpanelAuthEvent("Email");

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
      [MixpanelEventProperty.loginMethod]: "Email",
    });
  });

  it("returns a Menu Viewed event", () => {
    const event = createMixpanelAuthEvent();

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    });
  });

  it("returns a View Item List event", () => {
    const event = createMixpanelViewItemListEvent(PRODUCTS);

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
      [MixpanelEventProperty.itemListCount]: PRODUCTS.length,
      [MixpanelEventProperty.listOfItems]: getProductList(PRODUCTS),
    });
  });

  it("returns a Select Item event", () => {
    const event = createMixpanelSelectItemEvent(TEST_PRODUCT);
    const productTapped = mapProductToMixpanelProperties(TEST_PRODUCT);

    expect(event).toEqual({
      ...productTapped,
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
    });
  });

  it("returns a View Item event", () => {
    const event = createMixpanelViewItemEvent(TEST_PRODUCT);
    const productTapped = mapProductToMixpanelProperties(TEST_PRODUCT);

    expect(event).toEqual({
      ...productTapped,
      [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
    });
  });

  it("returns an Add To Cart event", () => {
    const event = createMixpanelCartEvent(TEST_PURCHASE, TEST_PURCHASES);
    const productTapped = mapPurchaseToMixpanelProperties(TEST_PURCHASE);
    const listOfItems = getProductList(TEST_PURCHASES);

    expect(event).toEqual({
      ...productTapped,
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
      [MixpanelEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [MixpanelEventProperty.updatedCartCost]: getTotalValue(TEST_PURCHASES),
      [MixpanelEventProperty.listOfItems]: listOfItems,
    });
  });

  it("returns a View Cart event", () => {
    const event = createMixpanelViewCartEvent(TEST_PURCHASES);

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
      [MixpanelEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [MixpanelEventProperty.listOfItems]: getProductList(TEST_PURCHASES),
      [MixpanelEventProperty.totalPrice]: getTotalValue(TEST_PURCHASES),
    });
  });

  it("returns a Purchase event", () => {
    const event = createMixpanelPurchaseEvent(
      TEST_PURCHASES,
      ButtonText.buyNow,
    );
    const products = mapPurchasesToMixpanelProperties(TEST_PURCHASES);

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
      [MixpanelEventProperty.triggerLocation]: ButtonText.buyNow,
      [MixpanelEventProperty.currency]: getCurrency(),
      [MixpanelEventProperty.totalPrice]: getTotalValue(TEST_PURCHASES),
      [MixpanelEventProperty.transactionId]: event["Transaction ID"],
      [MixpanelEventProperty.listOfItems]: getProductList(TEST_PURCHASES),
      [MixpanelEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [MixpanelEventProperty.products]: products,
    });
  });

  it("returns a Logout event", () => {
    const event = createMixpanelLogoutEvent(TEST_PURCHASES);
    const listOfItems = getProductList(TEST_PURCHASES);

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.action,
      [MixpanelEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [MixpanelEventProperty.listOfItems]: listOfItems,
      [MixpanelEventProperty.totalPrice]: getTotalValue(TEST_PURCHASES),
    });
  });

  it("returns a Custom Error event", () => {
    const event = createMixpanelErrorEvent();

    expect(event).toEqual({
      [MixpanelEventProperty.eventType]: AnalyticEventType.screen,
      [MixpanelEventProperty.errorCode]: "404",
      [MixpanelEventProperty.errorType]: "Page Not Found",
      [MixpanelEventProperty.triggerLocation]: "Products Screen",
    });
  });
});

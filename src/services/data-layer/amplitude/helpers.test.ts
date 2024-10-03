import { ButtonText } from "components/Button/constants";
import { AmplitudeEventProperty } from "services/analytics/amplitude/constants";
import { AnalyticEventType } from "services/analytics/constants";
import {
  getCurrency,
  findIndex,
  getProductList,
  getTotalValue,
} from "services/data/helpers";
import { PRODUCTS } from "services/data/products";
import {
  createAmplitudeAuthEvent,
  createAmplitudeViewItemListEvent,
  mapProductsToAmplitudeProperties,
  createAmplitudeSelectItemEvent,
  mapProductToAmplitudeProperties,
  createAmplitudeViewItemEvent,
  createAmplitudeViewCartEvent,
  createAmplitudePurchaseEvent,
  createAmplitudeLogoutEvent,
  createAmplitudeErrorEvent,
  createAmplitudeCartEvent,
  mapPurchaseToAmplitudeProperties,
  mapPurchasesToAmplitudeProperties,
} from "./helpers";
import { Title, Device, Version } from "services/data/constants";
import {
  TEST_FEWER_PRODUCTS,
  TEST_PRODUCT,
  TEST_PRODUCTS,
  TEST_PURCHASES,
  TEST_PURCHASE,
  TEST_IS_AUTHENTICATED,
} from "jest/constants";
import { getCartCount } from "contexts/shopping-cart/helpers";

describe("Amplitude Analytics Data Layer", () => {
  it("returns a re-mapped product object with Amplitude friendly keys", () => {
    const event = mapProductToAmplitudeProperties(TEST_PRODUCT);
    const index = findIndex(PRODUCTS, TEST_PRODUCT.id);

    expect(event).toEqual({
      [AmplitudeEventProperty.itemId]: TEST_PRODUCT.id,
      [AmplitudeEventProperty.itemName]: TEST_PRODUCT.title,
      [AmplitudeEventProperty.index]: index,
      [AmplitudeEventProperty.itemBrand]: TEST_PRODUCT.brand,
      [AmplitudeEventProperty.itemCategory]: TEST_PRODUCT.device,
      [AmplitudeEventProperty.itemVariant]: TEST_PRODUCT.version,
      [AmplitudeEventProperty.price]: TEST_PRODUCT.price,
      [AmplitudeEventProperty.stock]: TEST_PRODUCT.stock,
    });
  });

  it("returns a re-mapped products object with Amplitude friendly keys", () => {
    const event = mapProductsToAmplitudeProperties(TEST_FEWER_PRODUCTS);

    expect(event).toEqual([
      {
        [AmplitudeEventProperty.itemId]: "10",
        [AmplitudeEventProperty.itemName]: Title.OOT,
        [AmplitudeEventProperty.index]: 6,
        [AmplitudeEventProperty.itemBrand]: "Nintendo",
        [AmplitudeEventProperty.itemCategory]: Device.n64,
        [AmplitudeEventProperty.itemVariant]: Version.physical,
        [AmplitudeEventProperty.price]: 39.99,
        [AmplitudeEventProperty.stock]: 6,
      },
      {
        [AmplitudeEventProperty.itemId]: "30",
        [AmplitudeEventProperty.itemName]: Title.ALBW,
        [AmplitudeEventProperty.index]: 1,
        [AmplitudeEventProperty.itemBrand]: "Nintendo",
        [AmplitudeEventProperty.itemCategory]: Device.ds,
        [AmplitudeEventProperty.itemVariant]: Version.physical,
        [AmplitudeEventProperty.price]: 49.99,
        [AmplitudeEventProperty.stock]: 3,
      },
      {
        [AmplitudeEventProperty.itemId]: "11",
        [AmplitudeEventProperty.itemName]: Title.majorasMask,
        [AmplitudeEventProperty.index]: 7,
        [AmplitudeEventProperty.itemBrand]: "Nintendo",
        [AmplitudeEventProperty.itemCategory]: Device.n64,
        [AmplitudeEventProperty.itemVariant]: Version.physical,
        [AmplitudeEventProperty.price]: 49.99,
        [AmplitudeEventProperty.stock]: 7,
      },
    ]);
  });

  it("returns a re-mapped purchase object with Amplitude friendly keys", () => {
    const event = mapPurchaseToAmplitudeProperties(TEST_PURCHASE);
    const index = findIndex(TEST_PRODUCTS, TEST_PURCHASE.id);

    expect(event).toEqual({
      [AmplitudeEventProperty.itemId]: TEST_PURCHASE.id,
      [AmplitudeEventProperty.itemName]: TEST_PURCHASE.title,
      [AmplitudeEventProperty.index]: index,
      [AmplitudeEventProperty.itemBrand]: TEST_PURCHASE.brand,
      [AmplitudeEventProperty.itemCategory]: TEST_PURCHASE.device,
      [AmplitudeEventProperty.itemVariant]: TEST_PURCHASE.version,
      [AmplitudeEventProperty.price]: TEST_PURCHASE.price,
      [AmplitudeEventProperty.quantity]: TEST_PURCHASE.quantity,
    });
  });

  it("returns re-mapped purchased object with Amplitude friendly keys", () => {
    const event = mapPurchasesToAmplitudeProperties(TEST_PURCHASES);

    expect(event).toEqual([
      {
        [AmplitudeEventProperty.itemId]: "11",
        [AmplitudeEventProperty.itemName]: Title.majorasMask,
        [AmplitudeEventProperty.index]: 7,
        [AmplitudeEventProperty.itemBrand]: "Nintendo",
        [AmplitudeEventProperty.itemCategory]: Device.n64,
        [AmplitudeEventProperty.itemVariant]: Version.physical,
        [AmplitudeEventProperty.price]: 49.99,
        [AmplitudeEventProperty.quantity]: 2,
      },
      {
        [AmplitudeEventProperty.itemId]: "3",
        [AmplitudeEventProperty.itemName]: Title.ALTTP,
        [AmplitudeEventProperty.index]: 8,
        [AmplitudeEventProperty.itemBrand]: "Nintendo",
        [AmplitudeEventProperty.itemCategory]: Device.snes,
        [AmplitudeEventProperty.itemVariant]: Version.physical,
        [AmplitudeEventProperty.price]: 59.99,
        [AmplitudeEventProperty.quantity]: 1,
      },
    ]);
  });
  it("returns a Sign Up event", () => {
    const event = createAmplitudeAuthEvent(TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: TEST_IS_AUTHENTICATED,
    });
  });

  it("returns a Login event", () => {
    const event = createAmplitudeAuthEvent(TEST_IS_AUTHENTICATED, "Email");

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: TEST_IS_AUTHENTICATED,
      [AmplitudeEventProperty.loginMethod]: "Email",
    });
  });

  it("returns a Menu Viewed event", () => {
    const event = createAmplitudeAuthEvent(!TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: !TEST_IS_AUTHENTICATED,
    });
  });

  it("returns a View Item List event", () => {
    const event = createAmplitudeViewItemListEvent(
      PRODUCTS,
      !TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
      [AmplitudeEventProperty.loggedIn]: false,
      [AmplitudeEventProperty.itemListCount]: PRODUCTS.length,
      [AmplitudeEventProperty.listOfItems]: getProductList(PRODUCTS),
    });
  });

  it("returns a Select Item event", () => {
    const event = createAmplitudeSelectItemEvent(
      TEST_PRODUCT,
      !TEST_IS_AUTHENTICATED,
    );
    const productTapped = mapProductToAmplitudeProperties(TEST_PRODUCT);

    expect(event).toEqual({
      ...productTapped,
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: false,
    });
  });

  it("returns a View Item event", () => {
    const event = createAmplitudeViewItemEvent(
      TEST_PRODUCT,
      !TEST_IS_AUTHENTICATED,
    );
    const productTapped = mapProductToAmplitudeProperties(TEST_PRODUCT);

    expect(event).toEqual({
      ...productTapped,
      [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
      [AmplitudeEventProperty.loggedIn]: false,
    });
  });

  it("returns an Add To Cart event", () => {
    const event = createAmplitudeCartEvent(
      TEST_PURCHASE,
      TEST_PURCHASES,
      TEST_IS_AUTHENTICATED,
    );
    const productTapped = mapPurchaseToAmplitudeProperties(TEST_PURCHASE);
    const listOfItems = getProductList(TEST_PURCHASES);

    expect(event).toEqual({
      ...productTapped,
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: true,
      [AmplitudeEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [AmplitudeEventProperty.updatedCartCost]: getTotalValue(TEST_PURCHASES),
      [AmplitudeEventProperty.listOfItems]: listOfItems,
    });
  });

  it("returns a View Cart event", () => {
    const event = createAmplitudeViewCartEvent(
      TEST_PURCHASES,
      TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
      [AmplitudeEventProperty.loggedIn]: true,
      [AmplitudeEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [AmplitudeEventProperty.listOfItems]: getProductList(TEST_PURCHASES),
      [AmplitudeEventProperty.totalPrice]: getTotalValue(TEST_PURCHASES),
    });
  });

  it("returns a Purchase event", () => {
    const event = createAmplitudePurchaseEvent(
      TEST_PURCHASES,
      TEST_IS_AUTHENTICATED,
      ButtonText.buyNow,
    );
    const products = mapPurchasesToAmplitudeProperties(TEST_PURCHASES);

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.loggedIn]: true,
      [AmplitudeEventProperty.triggerLocation]: ButtonText.buyNow,
      [AmplitudeEventProperty.currency]: getCurrency(),
      [AmplitudeEventProperty.totalPrice]: getTotalValue(TEST_PURCHASES),
      [AmplitudeEventProperty.transactionId]: event["Transaction ID"],
      [AmplitudeEventProperty.products]: products,
      [AmplitudeEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
    });
  });

  it("returns a Logout event", () => {
    const event = createAmplitudeLogoutEvent(
      TEST_PURCHASES,
      !TEST_IS_AUTHENTICATED,
    );
    const listOfItems = getProductList(TEST_PURCHASES);

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.action,
      [AmplitudeEventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [AmplitudeEventProperty.loggedIn]: false,
      [AmplitudeEventProperty.listOfItems]: listOfItems,
      [AmplitudeEventProperty.totalPrice]: getTotalValue(TEST_PURCHASES),
    });
  });

  it("returns a Custom Error event", () => {
    const event = createAmplitudeErrorEvent(!TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [AmplitudeEventProperty.eventType]: AnalyticEventType.screen,
      [AmplitudeEventProperty.errorCode]: "404",
      [AmplitudeEventProperty.errorType]: "Page Not Found",
      [AmplitudeEventProperty.triggerLocation]: "Products Screen",
      [AmplitudeEventProperty.loggedIn]: false,
    });
  });
});

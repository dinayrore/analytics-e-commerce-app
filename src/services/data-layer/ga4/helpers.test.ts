import { PRODUCTS } from "services/data/products";
import {
  createGA4ErrorEvent,
  createGA4PurchaseEvent,
  createGA4SelectItemEvent,
  createGA4CartEvent,
  createGA4ViewItemEvent,
  createGA4ViewItemListEvent,
  mapProductToGA4Properties,
  createGA4AuthEvent,
  createGA4LogoutEvent,
  mapProductsToGA4Properties,
  mapPurchasesToGA4Properties,
  mapPurchaseToGA4Properties,
  createGA4RemoveFromCartEvent,
} from "./helpers";
import { GA4EventProperty } from "services/analytics/ga4/constants";
import { getCurrency, findIndex, getTotalValue } from "services/data/helpers";
import { ButtonText } from "components/Button/constants";
import { Device, Title, Version } from "services/data/constants";
import {
  TEST_FEWER_PRODUCTS,
  TEST_IS_AUTHENTICATED,
  TEST_PRODUCT,
  TEST_PRODUCTS,
  TEST_PURCHASE,
  TEST_PURCHASES,
} from "jest/constants";
import { getCartCount } from "contexts/shopping-cart/helpers";

describe("GA4 Analytics Data Layer", () => {
  it("returns a re-mapped product object with GA4 friendly keys", () => {
    const event = mapProductToGA4Properties(TEST_PRODUCT);
    const index = findIndex(PRODUCTS, TEST_PRODUCT.id);

    expect(event).toEqual({
      [GA4EventProperty.itemId]: TEST_PRODUCT.id,
      [GA4EventProperty.itemName]: TEST_PRODUCT.title,
      [GA4EventProperty.index]: index,
      [GA4EventProperty.itemBrand]: TEST_PRODUCT.brand,
      [GA4EventProperty.itemCategory]: TEST_PRODUCT.device,
      [GA4EventProperty.itemVariant]: TEST_PRODUCT.version,
      [GA4EventProperty.price]: TEST_PRODUCT.price,
      [GA4EventProperty.stock]: TEST_PRODUCT.stock,
    });
  });

  it("returns a re-mapped products object with GA4 friendly keys", () => {
    const event = mapProductsToGA4Properties(TEST_FEWER_PRODUCTS);

    expect(event).toEqual([
      {
        [GA4EventProperty.itemId]: "10",
        [GA4EventProperty.itemName]: Title.OOT,
        [GA4EventProperty.index]: 6,
        [GA4EventProperty.itemBrand]: "Nintendo",
        [GA4EventProperty.itemCategory]: Device.n64,
        [GA4EventProperty.itemVariant]: Version.physical,
        [GA4EventProperty.price]: 39.99,
        [GA4EventProperty.stock]: 6,
      },
      {
        [GA4EventProperty.itemId]: "30",
        [GA4EventProperty.itemName]: Title.ALBW,
        [GA4EventProperty.index]: 1,
        [GA4EventProperty.itemBrand]: "Nintendo",
        [GA4EventProperty.itemCategory]: Device.ds,
        [GA4EventProperty.itemVariant]: Version.physical,
        [GA4EventProperty.price]: 49.99,
        [GA4EventProperty.stock]: 3,
      },
      {
        [GA4EventProperty.itemId]: "11",
        [GA4EventProperty.itemName]: Title.majorasMask,
        [GA4EventProperty.index]: 7,
        [GA4EventProperty.itemBrand]: "Nintendo",
        [GA4EventProperty.itemCategory]: Device.n64,
        [GA4EventProperty.itemVariant]: Version.physical,
        [GA4EventProperty.price]: 49.99,
        [GA4EventProperty.stock]: 7,
      },
    ]);
  });

  it("returns a re-mapped purchase object with GA4 friendly keys", () => {
    const event = mapPurchaseToGA4Properties(TEST_PURCHASE);
    const index = findIndex(TEST_PRODUCTS, TEST_PURCHASE.id);

    expect(event).toEqual({
      [GA4EventProperty.itemId]: TEST_PURCHASE.id,
      [GA4EventProperty.itemName]: TEST_PURCHASE.title,
      [GA4EventProperty.index]: index,
      [GA4EventProperty.itemBrand]: TEST_PURCHASE.brand,
      [GA4EventProperty.itemCategory]: TEST_PURCHASE.device,
      [GA4EventProperty.itemVariant]: TEST_PURCHASE.version,
      [GA4EventProperty.price]: TEST_PURCHASE.price,
      [GA4EventProperty.quantity]: TEST_PURCHASE.quantity,
    });
  });

  it("returns re-mapped purchases object with GA4 friendly keys", () => {
    const event = mapPurchasesToGA4Properties(TEST_PURCHASES);

    expect(event).toEqual([
      {
        [GA4EventProperty.itemId]: "11",
        [GA4EventProperty.itemName]: Title.majorasMask,
        [GA4EventProperty.index]: 7,
        [GA4EventProperty.itemBrand]: "Nintendo",
        [GA4EventProperty.itemCategory]: Device.n64,
        [GA4EventProperty.itemVariant]: Version.physical,
        [GA4EventProperty.price]: 49.99,
        [GA4EventProperty.quantity]: 2,
      },
      {
        [GA4EventProperty.itemId]: "3",
        [GA4EventProperty.itemName]: Title.ALTTP,
        [GA4EventProperty.index]: 8,
        [GA4EventProperty.itemBrand]: "Nintendo",
        [GA4EventProperty.itemCategory]: Device.snes,
        [GA4EventProperty.itemVariant]: Version.physical,
        [GA4EventProperty.price]: 59.99,
        [GA4EventProperty.quantity]: 1,
      },
    ]);
  });

  it("returns a sign_up event", () => {
    const event = createGA4AuthEvent(TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [GA4EventProperty.loggedIn]: "true",
    });
  });

  it("returns a login event", () => {
    const event = createGA4AuthEvent(TEST_IS_AUTHENTICATED, "Email");

    expect(event).toEqual({
      [GA4EventProperty.loggedIn]: "true",
      [GA4EventProperty.loginMethod]: "Email",
    });
  });

  it("returns a menu_viewed event", () => {
    const event = createGA4AuthEvent(!TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [GA4EventProperty.loggedIn]: "false",
    });
  });

  it("returns a view_item_list event", () => {
    const event = createGA4ViewItemListEvent(PRODUCTS, !TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [GA4EventProperty.items]: mapProductsToGA4Properties(PRODUCTS),
      [GA4EventProperty.loggedIn]: "false",
    });
  });

  it("returns a select_item event", () => {
    const event = createGA4SelectItemEvent(
      TEST_PRODUCT,
      !TEST_IS_AUTHENTICATED,
    );
    const productTapped = mapProductToGA4Properties(TEST_PRODUCT);

    expect(event).toEqual({
      [GA4EventProperty.items]: [productTapped],
      [GA4EventProperty.loggedIn]: "false",
    });
  });

  it("returns a view_item event", () => {
    const event = createGA4ViewItemEvent(TEST_PRODUCT, !TEST_IS_AUTHENTICATED);
    const productTapped = mapProductToGA4Properties(TEST_PRODUCT);

    expect(event).toEqual({
      [GA4EventProperty.currency]: TEST_PRODUCT.currency,
      [GA4EventProperty.value]: TEST_PRODUCT.price,
      [GA4EventProperty.items]: [productTapped],
      [GA4EventProperty.loggedIn]: "false",
    });
  });

  it("returns an add_to_cart event", () => {
    const event = createGA4CartEvent(TEST_PURCHASES, TEST_IS_AUTHENTICATED);
    const items = mapPurchasesToGA4Properties(TEST_PURCHASES);
    expect(event).toEqual({
      [GA4EventProperty.currency]: getCurrency(),
      [GA4EventProperty.value]: getTotalValue(TEST_PURCHASES),
      [GA4EventProperty.items]: items,
      [GA4EventProperty.loggedIn]: "true",
    });
  });

  it("returns a remove_from_cart event", () => {
    const event = createGA4RemoveFromCartEvent(
      TEST_PURCHASE,
      TEST_PURCHASES,
      true,
    );
    const items = [mapPurchaseToGA4Properties(TEST_PURCHASE)];

    expect(event).toEqual({
      [GA4EventProperty.currency]: getCurrency(),
      [GA4EventProperty.value]: getTotalValue(TEST_PURCHASES),
      [GA4EventProperty.items]: items,
      [GA4EventProperty.loggedIn]: "true",
    });
  });

  it("returns a view_cart event", () => {
    const event = createGA4CartEvent(TEST_PURCHASES, TEST_IS_AUTHENTICATED);
    const items = mapPurchasesToGA4Properties(TEST_PURCHASES);
    expect(event).toEqual({
      [GA4EventProperty.currency]: getCurrency(),
      [GA4EventProperty.value]: getTotalValue(TEST_PURCHASES),
      [GA4EventProperty.items]: items,
      [GA4EventProperty.loggedIn]: "true",
    });
  });

  it("returns a purchase event", () => {
    const event = createGA4PurchaseEvent(
      TEST_PURCHASES,
      true,
      ButtonText.buyNow,
    );
    const items = mapPurchasesToGA4Properties(TEST_PURCHASES);

    expect(event).toEqual({
      [GA4EventProperty.currency]: getCurrency(),
      [GA4EventProperty.value]: getTotalValue(TEST_PURCHASES),
      [GA4EventProperty.transactionId]: event.transaction_id,
      [GA4EventProperty.items]: items,
      [GA4EventProperty.loggedIn]: "true",
      [GA4EventProperty.triggerLocation]: ButtonText.buyNow,
    });
  });

  it("returns a logout event", () => {
    const event = createGA4LogoutEvent(TEST_PURCHASES, !TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [GA4EventProperty.itemCount]: getCartCount(TEST_PURCHASES),
      [GA4EventProperty.loggedIn]: "false",
    });
  });

  it("returns a custom_error event", () => {
    const event = createGA4ErrorEvent(false);

    expect(event).toEqual({
      [GA4EventProperty.errorCode]: "404",
      [GA4EventProperty.errorType]: "Page Not Found",
      [GA4EventProperty.triggerLocation]: "Products Screen",
      [GA4EventProperty.loggedIn]: "false",
    });
  });
});

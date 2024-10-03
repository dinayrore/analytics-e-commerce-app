import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  TEST_PRODUCT,
  TEST_PURCHASE,
  TEST_PURCHASES,
  TEST_USER,
} from "jest/constants";
import { getTotalValue } from "services/data/helpers";
import {
  SnowplowSelfDescribingEventProperty,
  SnowplowSchema,
  SnowplowEventDataProperty,
  SnowplowUserEntityProperty,
  SnowplowEcommerceItemProperty,
  SnowplowStructuredEventProperty,
  SnowplowAction,
  SnowplowGlobalContextProperty,
  SnowplowTag,
  SnowplowVariantAction,
} from "./constants";
import {
  createSnowplowProductContext,
  createSnowplowPurchaseContext,
  createSnowplowUserEntity,
  createSnowplowEcomItem,
  createSnowplowEcomTransaction,
  createSnowplowAddToCartSelfDescribingEvent,
  createSnowplowExperimentSelfDescribingEvent,
  createSnowplowExperimentGlobalContext,
  createSnowplowExperimentData,
  createSnowplowStructuredEvent,
} from "./helpers";
import { Title, Device, Currency } from "services/data/constants";

describe("Snowplow Data Layer", () => {
  it("returns a product context", () => {
    const context = createSnowplowProductContext(TEST_PRODUCT);

    expect(context).toEqual({
      [SnowplowSelfDescribingEventProperty.schema]:
        SnowplowSchema.productContext,
      [SnowplowSelfDescribingEventProperty.data]: {
        [SnowplowEventDataProperty.id]: TEST_PRODUCT.id,
        [SnowplowEventDataProperty.name]: TEST_PRODUCT.title,
        [SnowplowEventDataProperty.category]: TEST_PRODUCT.device,
        [SnowplowEventDataProperty.price]: TEST_PRODUCT.price,
        [SnowplowEventDataProperty.quantity]: TEST_PRODUCT.stock,
        [SnowplowEventDataProperty.currency]: TEST_PRODUCT.currency,
      },
    });
  });

  it("returns a purchase context", () => {
    const context = createSnowplowPurchaseContext(TEST_PURCHASE);

    expect(context).toEqual({
      [SnowplowSelfDescribingEventProperty.schema]:
        SnowplowSchema.productContext,
      [SnowplowSelfDescribingEventProperty.data]: {
        [SnowplowEventDataProperty.id]: TEST_PURCHASE.id,
        [SnowplowEventDataProperty.name]: TEST_PURCHASE.title,
        [SnowplowEventDataProperty.category]: TEST_PURCHASE.device,
        [SnowplowEventDataProperty.price]: TEST_PURCHASE.price,
        [SnowplowEventDataProperty.quantity]: TEST_PURCHASE.quantity,
        [SnowplowEventDataProperty.currency]: TEST_PURCHASE.currency,
      },
    });
  });

  it("returns a user entity", () => {
    const user = createSnowplowUserEntity(TEST_USER);

    expect(user).toEqual({
      [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.userEntity,
      [SnowplowSelfDescribingEventProperty.data]: {
        [SnowplowUserEntityProperty.id]: TEST_USER.id,
        [SnowplowUserEntityProperty.is_guest]: false,
        [SnowplowUserEntityProperty.email]: TEST_USER.email,
      },
    });
  });

  it("returns an ecommerce item", () => {
    const item = createSnowplowEcomItem(TEST_PURCHASES);

    expect(item).toEqual([
      {
        [SnowplowEcommerceItemProperty.sku]: "11",
        [SnowplowEcommerceItemProperty.name]: Title.majorasMask,
        [SnowplowEcommerceItemProperty.price]: 49.99,
        [SnowplowEcommerceItemProperty.category]: Device.n64,
        [SnowplowEcommerceItemProperty.currency]: Currency.INR,
        [SnowplowEcommerceItemProperty.quantity]: 2,
      },
      {
        [SnowplowEcommerceItemProperty.sku]: "3",
        [SnowplowEcommerceItemProperty.name]: Title.ALTTP,
        [SnowplowEcommerceItemProperty.price]: 59.99,
        [SnowplowEcommerceItemProperty.category]: Device.snes,
        [SnowplowEcommerceItemProperty.currency]: Currency.USD,
        [SnowplowEcommerceItemProperty.quantity]: 1,
      },
    ]);
  });

  it("returns a ecommerce transaction", () => {
    const orderId = uuidv4();
    const transaction = createSnowplowEcomTransaction(TEST_PURCHASES, orderId);
    const ecomItems = createSnowplowEcomItem(TEST_PURCHASES);

    expect(transaction).toEqual({
      orderId,
      totalValue: getTotalValue(TEST_PURCHASES),
      items: ecomItems,
    });
  });

  it("returns an add to cart self describing event", () => {
    const event = createSnowplowAddToCartSelfDescribingEvent(TEST_PURCHASE);

    expect(event).toEqual({
      [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.addToCart,
      [SnowplowSelfDescribingEventProperty.data]: {
        [SnowplowEcommerceItemProperty.sku]: TEST_PURCHASE.id,
        [SnowplowEcommerceItemProperty.name]: TEST_PURCHASE.title,
        [SnowplowEcommerceItemProperty.unitPrice]: TEST_PURCHASE.price,
        [SnowplowEcommerceItemProperty.quantity]: TEST_PURCHASE.quantity,
        [SnowplowEcommerceItemProperty.category]: TEST_PURCHASE.device,
        [SnowplowEcommerceItemProperty.currency]: TEST_PURCHASE.currency,
      },
    });
  });

  it("returns a structured event", () => {
    const event = createSnowplowStructuredEvent(TEST_PURCHASE, TEST_PURCHASES);

    expect(event).toEqual({
      [SnowplowStructuredEventProperty.category]: TEST_PURCHASE.device,
      [SnowplowStructuredEventProperty.action]: SnowplowAction.addToCart,
      [SnowplowStructuredEventProperty.label]: TEST_PURCHASE.title,
      [SnowplowStructuredEventProperty.property]: TEST_PURCHASE.id,
      [SnowplowStructuredEventProperty.value]: getTotalValue(TEST_PURCHASES),
    });
  });

  it("returns a A/B experiment data with a variant action", () => {
    const data = createSnowplowExperimentData(
      TEST_USER,
      SnowplowVariantAction.add,
    );

    expect(data).toEqual({
      experimentName: "Red XIII",
      experimentId: "13",
      variantAssigned: "control",
      userId: TEST_USER.id,
      variantAction: SnowplowVariantAction.add,
    });
  });

  it("returns a A/B experiment data context", () => {
    const data = createSnowplowExperimentData(TEST_USER);

    expect(data).toEqual({
      experimentName: "Red XIII",
      experimentId: "13",
      variantAssigned: "control",
      userId: TEST_USER.id,
    });
  });

  it("returns an experiment self describing event", () => {
    const data = createSnowplowExperimentData(
      TEST_USER,
      SnowplowVariantAction.add,
    );
    const event = createSnowplowExperimentSelfDescribingEvent(
      SnowplowSchema.abAssignment,
      data,
    );

    expect(event).toEqual({
      [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.abAssignment,
      [SnowplowSelfDescribingEventProperty.data]: data,
    });
  });

  it("returns an experiment global context", () => {
    const eventData = createSnowplowExperimentData(
      TEST_USER,
      SnowplowVariantAction.remove,
    );
    const globalContext = createSnowplowExperimentGlobalContext(
      SnowplowSchema.abAssignment,
      eventData,
    );
    const context = createSnowplowExperimentSelfDescribingEvent(
      SnowplowSchema.abAssignment,
      eventData,
    );

    expect(globalContext).toEqual({
      [SnowplowGlobalContextProperty.tag]: SnowplowTag.experimentGlobalContexts,
      [SnowplowGlobalContextProperty.globalContexts]: [context],
    });
  });
});

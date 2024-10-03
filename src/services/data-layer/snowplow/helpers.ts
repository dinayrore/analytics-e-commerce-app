import { EcommerceItem, EventContext } from "@snowplow/react-native-tracker";
import { Purchase, User } from "services/data/types";
import { Product } from "services/data/products";
import {
  SnowplowEcommerceItemProperty,
  SnowplowEventDataProperty,
  SnowplowSchema,
  SnowplowSelfDescribingEventProperty,
  SnowplowAction,
  SnowplowStructuredEventProperty,
  SnowplowUserEntityProperty,
  SnowplowGlobalContextProperty,
  SnowplowTag,
  SnowplowVariantAction,
} from "./constants";
import { getTotalValue } from "services/data/helpers";
import { SnowplowExperimentDataProps } from "./types";

/**
 * Event context for purchases, which are products that have been added to a cart
 * @param purchases  a list of purchasable products
 * @returns EventContext
 */
export const createSnowplowProductContext = (
  product: Product,
): EventContext => {
  return {
    [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.productContext,
    [SnowplowSelfDescribingEventProperty.data]: {
      [SnowplowEventDataProperty.id]: product.id,
      [SnowplowEventDataProperty.name]: product.title,
      [SnowplowEventDataProperty.category]: product.device,
      [SnowplowEventDataProperty.price]: product.price,
      [SnowplowEventDataProperty.quantity]: product.stock,
      [SnowplowEventDataProperty.currency]: product.currency,
    },
  };
};

/**
 * Event context for purchases, which are products that have been added to a cart
 * @param purchases  a list of purchasable products
 * @returns EventContext
 */
export const createSnowplowPurchaseContext = (
  purchase: Purchase,
): EventContext => {
  return {
    [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.productContext,
    [SnowplowSelfDescribingEventProperty.data]: {
      [SnowplowEventDataProperty.id]: purchase.id,
      [SnowplowEventDataProperty.name]: purchase.title,
      [SnowplowEventDataProperty.category]: purchase.device,
      [SnowplowEventDataProperty.price]: purchase.price,
      [SnowplowEventDataProperty.quantity]: purchase.quantity,
      [SnowplowEventDataProperty.currency]: purchase.currency,
    },
  };
};

/**
 * Create a Snowplow EventContext for users
 * @param user
 * @returns EventContext
 */
export const createSnowplowUserEntity = (user: User): EventContext => {
  return {
    [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.userEntity,
    [SnowplowSelfDescribingEventProperty.data]: {
      [SnowplowUserEntityProperty.id]: user.id,
      [SnowplowUserEntityProperty.is_guest]: false,
      [SnowplowUserEntityProperty.email]: user.email,
    },
  };
};

/**
 * Remap a list of purchases to Snowplow EcommerceItem type properties
 * @param purchase
 * @returns
 */
export const createSnowplowEcomItem = (
  purchase: Purchase[],
): EcommerceItem[] => {
  const purchaseRemapped = purchase.map((item) => {
    return {
      [SnowplowEcommerceItemProperty.sku]: item.id,
      [SnowplowEcommerceItemProperty.name]: item.title,
      [SnowplowEcommerceItemProperty.price]: item.price,
      [SnowplowEcommerceItemProperty.quantity]: item.quantity,
      [SnowplowEcommerceItemProperty.category]: item.device,
      [SnowplowEcommerceItemProperty.currency]: item.currency,
    };
  });
  return purchaseRemapped;
};

/**
 * Create Ecommerce Transaction Event
 * @param purchase
 * @returns
 */
export const createSnowplowEcomTransaction = (
  purchase: Purchase[],
  orderId: string,
) => {
  const ecomItems = createSnowplowEcomItem(purchase);
  return {
    orderId,
    totalValue: getTotalValue(purchase),
    items: ecomItems,
  };
};

/**
 * Create a Self Describing Event for an add to cart action
 * @param purchase
 * @returns
 */
export const createSnowplowAddToCartSelfDescribingEvent = (
  purchase: Purchase,
) => {
  // TODO: SnowplowTracker:trackEcommerceTransaction: ecommerceTransaction event requires orderId,
  // totalValue to be set and items to be an array of valid ecommerceItems
  return {
    [SnowplowSelfDescribingEventProperty.schema]: SnowplowSchema.addToCart,
    [SnowplowSelfDescribingEventProperty.data]: {
      [SnowplowEcommerceItemProperty.sku]: purchase.id,
      [SnowplowEcommerceItemProperty.name]: purchase.title,
      [SnowplowEcommerceItemProperty.unitPrice]: purchase.price,
      [SnowplowEcommerceItemProperty.quantity]: purchase.quantity,
      [SnowplowEcommerceItemProperty.category]: purchase.device,
      [SnowplowEcommerceItemProperty.currency]: purchase.currency,
    },
  };
};

/**
 * Create a uniquely structured event for an add to cart action
 * @param purchase
 * @param productsInCart
 * @returns
 */
export const createSnowplowStructuredEvent = (
  purchase: Purchase,
  productsInCart: Purchase[],
) => {
  return {
    [SnowplowStructuredEventProperty.category]: purchase.device,
    [SnowplowStructuredEventProperty.action]: SnowplowAction.addToCart,
    [SnowplowStructuredEventProperty.label]: purchase.title,
    [SnowplowStructuredEventProperty.property]: purchase.id,
    [SnowplowStructuredEventProperty.value]: getTotalValue(productsInCart),
  };
};

/**
 * Create A/B Experiment Data or A/B Context for variant and control groups
 * @param user
 * @param hasAction
 * @param action
 * @returns
 */
export const createSnowplowExperimentData = (
  user: User,
  action?: SnowplowVariantAction,
) => {
  const hasAction = action !== undefined;
  if (hasAction) {
    return {
      experimentName: "Red XIII",
      experimentId: "13",
      variantAssigned: "control",
      userId: user.id,
      variantAction: action,
    };
  } else {
    return {
      experimentName: "Red XIII",
      experimentId: "13",
      variantAssigned: "control",
      userId: user.id,
    };
  }
};

/**
 * Create an experiment self describing event
 * @param schema
 * @param data
 * @returns
 */
export const createSnowplowExperimentSelfDescribingEvent = (
  schema: SnowplowSchema,
  data: SnowplowExperimentDataProps,
) => {
  return {
    [SnowplowSelfDescribingEventProperty.schema]: schema,
    [SnowplowSelfDescribingEventProperty.data]: data,
  };
};

/**
 * Create a global context for an experiment self describing event
 * @param schema
 * @param data
 * @returns
 */
export const createSnowplowExperimentGlobalContext = (
  schema: SnowplowSchema,
  data: SnowplowExperimentDataProps,
) => {
  const context = createSnowplowExperimentSelfDescribingEvent(schema, data);
  return {
    [SnowplowGlobalContextProperty.tag]: SnowplowTag.experimentGlobalContexts,
    [SnowplowGlobalContextProperty.globalContexts]: [context],
  };
};

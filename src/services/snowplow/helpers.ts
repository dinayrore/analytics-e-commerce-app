import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { tracker } from "services/snowplow/tracker";
import { Purchase, User } from "services/data/types";
import {
  createSnowplowPurchaseContext,
  createSnowplowUserEntity,
  createSnowplowAddToCartSelfDescribingEvent,
  createSnowplowStructuredEvent,
  createSnowplowEcomTransaction,
  createSnowplowExperimentSelfDescribingEvent,
  createSnowplowExperimentGlobalContext,
  createSnowplowExperimentData,
} from "services/data-layer/snowplow/helpers";
import { SnowplowScreenViewEventProps } from "services/data-layer/snowplow/types";
import {
  SnowplowSchema,
  SnowplowTag,
  SnowplowVariantAction,
} from "services/data-layer/snowplow/constants";

/**
 * Track Screen View Events using SnowplowScreenViewEventProps
 * @param name
 * @param id
 * @param previousName
 * @param context
 */
export const sendSnowplowScreenViewEvent = ({
  name,
  id,
  previousName,
}: SnowplowScreenViewEventProps) => {
  tracker.trackScreenViewEvent({ name, id, previousName });
};

/**
 * Send a Snowplow Add to Cart Event using a Snowplow schema
 * @param purchase
 * @param user
 * @returns
 */
export const sendSnowplowAddToCartEvent = (
  purchase: Purchase,
  user: User | null,
) => {
  if (user === null) return;
  const productContext = createSnowplowPurchaseContext(purchase);
  const userContext = createSnowplowUserEntity(user);
  const event = createSnowplowAddToCartSelfDescribingEvent(purchase);
  tracker.trackSelfDescribingEvent(event, [productContext, userContext]);
};

/**
 * Send a Snowplow Add to Cart Structured Event
 * @param purchase
 * @param user
 * @returns
 */
export const sendSnowplowAddToCartStructuredEvent = (
  purchase: Purchase,
  productsInCart: Purchase[],
) => {
  const event = createSnowplowStructuredEvent(purchase, productsInCart);
  tracker.trackStructuredEvent(event);
};

/**
 * Track E-commerce Transaction for Purchase Event
 * @param purchase
 * @returns
 */
export const sendSnowplowCheckoutEvent = (purchase: Purchase[]) => {
  const ecomTransaction = createSnowplowEcomTransaction(purchase, uuidv4());
  tracker.trackEcommerceTransactionEvent(ecomTransaction);
};

/**
 * Track a self describing event with a global context
 * @param user
 */
export const sendSnowplowExperimentEvent = (user: User) => {
  // TODO: find user by id set data to be variant instead of control
  const data = createSnowplowExperimentData(user, SnowplowVariantAction.add);
  // console.log("TRACKING EXPERIMENT DATA: ", data);
  const event = createSnowplowExperimentSelfDescribingEvent(
    SnowplowSchema.abAssignment,
    data,
  );
  const context = createSnowplowExperimentData(user);
  // console.log("TRACKING EXPERIMENT CONTEXT: ", context);
  const globalContext = createSnowplowExperimentGlobalContext(
    SnowplowSchema.abAssignment,
    context,
  );
  tracker.trackSelfDescribingEvent(event);
  tracker.addGlobalContexts(globalContext);
};

/**
 * Remove global context
 * Button added to menu drawer after user isAuthenticated
 */
export const sendSnowplowRemoveGlobalContextEvent = (user: User) => {
  // console.log("REMOVING GLOBAL CONTEXT");
  const data = createSnowplowExperimentData(user, SnowplowVariantAction.remove);

  const event = createSnowplowExperimentSelfDescribingEvent(
    SnowplowSchema.abAssignment,
    data,
  );
  tracker.trackSelfDescribingEvent(event);
  tracker.removeGlobalContexts(SnowplowTag.experimentGlobalContexts);
  // console.log("CONTEXT REMOVED");
};

/* istanbul ignore file */
export enum SnowplowSelfDescribingEventProperty {
  schema = "schema",
  data = "data",
}

export enum SnowplowEventDataProperty {
  id = "id",
  name = "name",
  category = "category",
  price = "price",
  quantity = "quantity",
  currency = "currency",
}

export enum SnowplowSchema {
  productContext = "iglu:com.snowplowanalytics.snowplow.ecommerce/product/jsonschema/1-0-0",
  userEntity = "iglu:com.snowplowanalytics.snowplow.ecommerce/user/jsonschema/1-0-0",
  addToCart = "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
}

export enum SnowplowUserEntityProperty {
  id = "id",
  is_guest = "is_guest",
  email = "email",
}

export enum SnowplowEcommerceItemProperty {
  sku = "sku",
  name = "name",
  quantity = "quantity",
  category = "category",
  currency = "currency",
  price = "price",
  unitPrice = "unitPrice",
}

export enum SnowplowStructuredEventProperty {
  category = "category",
  action = "action",
  label = "label",
  property = "property",
  value = "value",
}

export enum SnowplowAction {
  addToCart = "add to cart",
}

export enum SnowplowVariantAction {
  add = "add",
  remove = "remove",
}

export enum SnowplowTag {
  experimentGlobalContexts = "experiment-global-contexts",
}

export enum SnowplowGlobalContextProperty {
  tag = "tag",
  globalContexts = "globalContexts",
}

import {
  TEST_PRODUCT,
  TEST_PRODUCTS,
  TEST_PURCHASES,
  TEST_PURCHASE,
  TEST_IS_AUTHENTICATED,
  TEST_FEWER_PRODUCTS,
} from "jest/constants";
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
  createProductContextData,
  createProductsContextData,
  createPurchaseContextData,
  createPurchasesContextData,
} from "./helpers";
import {
  Currency,
  Device,
  Page,
  Title,
  Version,
} from "services/data/constants";
import { AdobeContextDataVariables } from "services/analytics/adobe/constants";
import { ButtonText } from "components/Button/constants";

describe("Adobe Analytics Data Layer", () => {
  it("returns an Adobe product context data object", () => {
    const event = createProductContextData(TEST_PRODUCT);
    expect(event).toEqual(`${Device.n64};${Title.OOT};;${39.99}`);
  });

  it("returns multiple Products in an Adobe product context data object", () => {
    const event = createProductsContextData(TEST_PRODUCTS);

    expect(event).toEqual(
      `${Device.switch};${Title.BOTW};;${59.99},${Device.ds};${
        Title.ALBW
      };;${49.99},${Device.switch};${Title.hyruleWarriors};;${59.99},${
        Device.switch
      };${Title.linksAwakening};;${59.99},${Device.gameAndWatch};${
        Title.gameAndWatch
      };;${49.99},${Device.nes};${Title.legendOfZelda};;${1050.0},${
        Device.n64
      };${Title.OOT};;${39.99},${Device.n64};${Title.majorasMask};;${49.99},${
        Device.snes
      };${Title.ALTTP};;${59.99},${Device.sheikahSlate};${Title.TOTK};;${0}`,
    );
  });

  it("returns a Purchase Adobe product context data object", () => {
    const event = createPurchaseContextData(TEST_PURCHASE);
    expect(event).toEqual(`${Device.n64};${Title.majorasMask};2;${49.99}`);
  });

  it("returns multiple Purchases in an Adobe product context data object", () => {
    const event = createPurchasesContextData(TEST_PURCHASES);

    expect(event).toEqual(
      `${Device.n64};${Title.majorasMask};2;${49.99},${Device.snes};${
        Title.ALTTP
      };1;${59.99}`,
    );
  });

  it("returns a Sign Up event", () => {
    const event = createAdobeSignUpEvent(TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.registration]: "1",
    });
  });

  it("returns a Login event", () => {
    const event = createAdobeLoginEvent(TEST_IS_AUTHENTICATED, "Email");

    expect(event).toEqual({
      [AdobeContextDataVariables.loginMethod]: "Email",
      [AdobeContextDataVariables.loggedIn]: "true",
    });
  });

  it("returns a Menu Viewed event", () => {
    const event = createAdobeMenuViewedEvent(!TEST_IS_AUTHENTICATED);
    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "false",
    });
  });

  it("returns a View Item List event", () => {
    const event = createAdobeViewItemListEvent(
      TEST_FEWER_PRODUCTS,
      !TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "false",
      [AdobeContextDataVariables.page]: Page.viewItemList,
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.OOT
      };;${39.99},${Device.ds};${Title.ALBW};;${49.99},${Device.n64};${
        Title.majorasMask
      };;${49.99}`,
    });
  });

  it("returns a Select Item event", () => {
    const event = createAdobeSelectItemEvent(
      TEST_PRODUCT,
      !TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "false",
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.OOT
      };;${39.99}`,
      [AdobeContextDataVariables.itemId]: "10",
      [AdobeContextDataVariables.itemBrand]: "Nintendo",
      [AdobeContextDataVariables.itemVariant]: Version.physical,
    });
  });

  it("returns a View Item event", () => {
    const event = createAdobeViewItemEvent(TEST_PRODUCT, TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.page]: Page.viewItem,
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.OOT
      };;${39.99}`,
      [AdobeContextDataVariables.itemId]: "10",
      [AdobeContextDataVariables.itemBrand]: "Nintendo",
      [AdobeContextDataVariables.itemVariant]: Version.physical,
      [AdobeContextDataVariables.viewProduct]: "1",
    });
  });

  it("returns a Add To Cart event", () => {
    const event = createAdobeAddToCartEvent(
      TEST_PURCHASE,
      TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.majorasMask
      };2;${49.99}`,
      [AdobeContextDataVariables.itemId]: "11",
      [AdobeContextDataVariables.itemBrand]: "Nintendo",
      [AdobeContextDataVariables.itemVariant]: Version.physical,
      [AdobeContextDataVariables.cartAddition]: "1",
    });
  });

  it("returns a Remove From Cart event", () => {
    const event = createAdobeRemoveFromCartEvent(
      TEST_PURCHASE,
      TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.majorasMask
      };2;${49.99}`,
      [AdobeContextDataVariables.itemId]: "11",
      [AdobeContextDataVariables.itemBrand]: "Nintendo",
      [AdobeContextDataVariables.itemVariant]: Version.physical,
      [AdobeContextDataVariables.cartRemoval]: "1",
    });
  });

  it("returns a View Cart event", () => {
    const event = createAdobeViewCartEvent(
      TEST_PURCHASES,
      TEST_IS_AUTHENTICATED,
    );

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.page]: Page.viewCart,
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.majorasMask
      };2;${49.99},${Device.snes};${Title.ALTTP};1;${59.99}`,
      [AdobeContextDataVariables.cartView]: "1",
    });
  });

  it("returns a Purchase event", () => {
    const event = createAdobePurchaseEvent(
      TEST_PURCHASES,
      TEST_IS_AUTHENTICATED,
      ButtonText.buyNow,
    );

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.majorasMask
      };2;${49.99},${Device.snes};${Title.ALTTP};1;${59.99}`,
      [AdobeContextDataVariables.purchaseId]: event["rnza.purchaseid"],
      [AdobeContextDataVariables.purchase]: "1",
      [AdobeContextDataVariables.triggerLocation]: ButtonText.buyNow,
    });
  });

  it("returns a Logout event", () => {
    const event = createAdobeLogoutEvent(TEST_PURCHASES, TEST_IS_AUTHENTICATED);

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "true",
      [AdobeContextDataVariables.currencyCode]: Currency.USD,
      [AdobeContextDataVariables.products]: `${Device.n64};${
        Title.majorasMask
      };2;${49.99},${Device.snes};${Title.ALTTP};1;${59.99}`,
    });
  });

  it("returns a Custom Error trackAction event", () => {
    const isAction = true;
    const event = createAdobeErrorEvent(!TEST_IS_AUTHENTICATED, isAction);

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "false",
      [AdobeContextDataVariables.errorCode]: "404",
      [AdobeContextDataVariables.errorType]: "Page Not Found",
      [AdobeContextDataVariables.triggerLocation]: "Products Screen",
    });
  });

  it("returns a Custom Error trackState event", () => {
    const isAction = false;
    const event = createAdobeErrorEvent(!TEST_IS_AUTHENTICATED, isAction);

    expect(event).toEqual({
      [AdobeContextDataVariables.loggedIn]: "false",
      [AdobeContextDataVariables.page]: Page.customError,
      [AdobeContextDataVariables.errorCode]: "404",
      [AdobeContextDataVariables.errorType]: "Page Not Found",
      [AdobeContextDataVariables.triggerLocation]: "Products Screen",
    });
  });
});

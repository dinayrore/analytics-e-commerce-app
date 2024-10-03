import { AuthenticationContextType } from "contexts/authentication/types";
import { PRODUCTS } from "../src/services/data/products";
import {
  Title,
  Version,
  Device,
  Currency,
  ProductImage,
} from "services/data/constants";
import { Purchase, User } from "services/data/types";
import { ProductsContextType } from "contexts/products/types";
import { ShoppingCartContextType } from "contexts/shopping-cart/types";
import { getCartCount } from "contexts/shopping-cart/helpers";

export const TEST_IS_AUTHENTICATED = true;
export const TEST_IS_EMPTY_CART = true;

export const TEST_PRODUCT = PRODUCTS[6];
export const TEST_PRODUCTS = PRODUCTS;
export const TEST_FEWER_PRODUCTS = [PRODUCTS[6], PRODUCTS[1], PRODUCTS[7]];

export const TEST_PURCHASES: Purchase[] = [
  {
    id: "11",
    brand: "Nintendo",
    title: Title.majorasMask,
    price: 49.99,
    image: ProductImage.majorasMask,
    version: Version.physical,
    device: Device.n64,
    currency: Currency.INR,
    quantity: 2,
  },
  {
    id: "3",
    brand: "Nintendo",
    title: Title.ALTTP,
    price: 59.99,
    image: ProductImage.ALTTP,
    version: Version.physical,
    device: Device.snes,
    currency: Currency.USD,
    quantity: 1,
  },
];
export const TEST_PURCHASE = TEST_PURCHASES[0];

export const TEST_USER: User = {
  id: "#1-princess-hyrule",
  name: "Princess Zelda",
  email: "zelda@hyrule.com",
  password: "SUPERsecretP@ssw0rd",
};

export const TEST_AUTHENTICATION_CONTEXT_NULL_USER: AuthenticationContextType =
  {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    onLogin: jest.fn(),
    onRegister: jest.fn(),
    onLogout: jest.fn(),
    email: "",
    setEmail: jest.fn(),
    password: "",
    setPassword: jest.fn(),
    name: "",
    setName: jest.fn(),
  };

export const TEST_AUTHENTICATION_CONTEXT_USER: AuthenticationContextType = {
  isAuthenticated: true,
  user: TEST_USER,
  isLoading: false,
  onLogin: jest.fn(),
  onRegister: jest.fn(),
  onLogout: jest.fn(),
  email: TEST_USER.email,
  setEmail: jest.fn(),
  password: TEST_USER.password,
  setPassword: jest.fn(),
  name: TEST_USER.name,
  setName: jest.fn(),
};

export const TEST_PRODUCTS_CONTEXT: ProductsContextType = {
  products: TEST_PRODUCTS,
  onPressProducts: jest.fn(),
  onPressProductsError: jest.fn(),
};

export const TEST_EMPTY_SHOPPING_CART_CONTEXT: ShoppingCartContextType = {
  cart: [],
  cartCount: getCartCount([]),
  onPressRemoveFromCart: jest.fn(),
  onPressAddToCart: jest.fn(),
  onPressCheckout: jest.fn(),
};

export const TEST_SHOPPING_CART_CONTEXT: ShoppingCartContextType = {
  cart: TEST_PURCHASES,
  cartCount: getCartCount(TEST_PURCHASES),
  onPressRemoveFromCart: jest.fn(),
  onPressAddToCart: jest.fn(),
  onPressCheckout: jest.fn(),
};

// Mock Drawer dispatch for React Native Navigation
export const mockDispatch = jest.fn();

// Mock React Native Navigation
export const mockNavigation = jest.fn();

// Mock React Native Navigation Route
export const mockRoute = { params: { id: "11" } };

// Mock React Navigation Props
export const navigationProps: any = {
  navigation: {
    navigate: mockNavigation,
    goBack: jest.fn(),
  },
  route: mockRoute,
};

export const mockedNavigationNavigate = navigationProps.navigation;

export const jestSpyOnNavigationNavigate = jest.spyOn(
  mockedNavigationNavigate,
  "navigate",
);

export const jestSpyOnNavigationGoBack = jest.spyOn(
  mockedNavigationNavigate,
  "goBack",
);

export const mockedNavigationRoute = navigationProps.route;

// Mock React Native Toast Message Show Function
export const mockShowToast = jest.fn();

// Mock React Navigation Props
export const snowplowTrackerProps: any = {
  tracker: {
    trackScreenViewEvent: jest.fn(),
  },
};

export const mockedSnowplowTracker = snowplowTrackerProps.tracker;

export const jestSpyOnSnowplowTracker = jest.spyOn(
  mockedSnowplowTracker,
  "trackScreenViewEvent",
);

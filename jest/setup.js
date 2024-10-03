import "@testing-library/jest-native/extend-expect";
import "react-native-gesture-handler/jestSetup";
import { mockDispatch, mockNavigation, mockShowToast } from "./constants";

// Silence console.error
global.console = {
  ...console,
  error: jest.fn(),
};

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

// Mock Firebase for GA4
jest.mock("@react-native-firebase/analytics", () => {
  return () => ({
    logEvent: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn(),
  });
});

// Mock Expo Vector Icons
jest.mock("@expo/vector-icons", () => {
  const { Pressable } = require("react-native");
  return {
    AntDesign: Pressable,
    Entypo: Pressable,
    EvilIcons: Pressable,
    Feather: Pressable,
    FontAwesome: Pressable,
    FontAwesome5: Pressable,
    Fontisto: Pressable,
    Foundation: Pressable,
    Ionicons: Pressable,
    Octicons: Pressable,
    Zocial: Pressable,
    SimpleLineIcons: Pressable,
    MaterialCommunityIcons: Pressable,
    MaterialIcons: Pressable,
  };
});

// Mock React Navigation
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigation,
      dispatch: mockDispatch,
    }),
  };
});

// Mock React Navigation Drawer
jest.mock("@react-navigation/drawer", () => {
  return {
    useDrawerStatus: () => ({
      drawerStatus: "open",
    }),
  };
});

jest.mock("mixpanel-react-native", () => ({
  __esModule: true,
  default: () => jest.fn(),
  Mixpanel: jest.fn(() => ({
    init: jest.fn(),
    track: jest.fn(),
  })),
}));


// Mock React Native Toast Message
jest.mock("react-native-toast-message", () => ({
  show: mockShowToast,
  hide: jest.fn(),
}));

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () =>
    require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock('@adobe/react-native-aepcore');

// Mock Snowplow Tracker
jest.mock('@snowplow/react-native-tracker', () => ({
  createTracker: jest.fn(),
  trackScreenView: jest.fn(),
  trackSelfDescribingEvent: jest.fn(),
  trackPageView: jest.fn(),
  addTracker: jest.fn(),
  removeTracker: jest.fn(),
  setUserId: jest.fn(),
  setSessionContext: jest.fn(),
  setEcommerceContext: jest.fn(),
  setCustomContext: jest.fn(),
  getSessionId: jest.fn(),
  getGlobalContexts: jest.fn(),
  setGlobalContexts: jest.fn(),
}));
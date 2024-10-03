import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { init } from "@amplitude/analytics-react-native";
import { AMPLITUDE_API_KEY } from "services/analytics/amplitude/constants";
import { MIXPANEL_API_KEY } from "services/analytics/mixpanel/constants";
import Loading from "components/Loading/Loading";
import { NavigationContainer } from "@react-navigation/native";
import Router from "navigation/router";
import Toast from "react-native-toast-message";
import { toastConfig } from "components/ToastMessage/Toast.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PRODUCTS } from "./src/services/data/products";
import { mixpanel } from "services/analytics/mixpanel/events";
import { tracker } from "services/snowplow/tracker";

// Initialize Amplitude for Analytics
if (AMPLITUDE_API_KEY) {
  init(AMPLITUDE_API_KEY);
}

// Initialize Mixpanel for Analytics
if (MIXPANEL_API_KEY) {
  mixpanel.init();
}

// Initialize Snowplow
if (tracker) {
  tracker;
}

const App = () => {
  const [fontsLoaded] = useFonts({
    "VCGaramondCondensed-Bold": require("assets/fonts/VCGaramondCondensed-Bold.otf"),
    "VCGaramondCondensed-Regular": require("assets/fonts/VCGaramondCondensed-Regular.otf"),
    "VCGaramondCondensed-SemiBold": require("assets/fonts/VCGaramondCondensed-SemiBold.otf"),
  });

  // Save PRODUCTS to AsyncStorage
  AsyncStorage.setItem("@Products", JSON.stringify(PRODUCTS));

  return fontsLoaded ? (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <StatusBar />
      <Toast position="bottom" bottomOffset={80} config={toastConfig} />
    </SafeAreaProvider>
  ) : (
    <Loading />
  );
};

export default App;

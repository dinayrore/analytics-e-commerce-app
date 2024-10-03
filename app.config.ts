import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "ecommerce-analytics-app",
  slug: "ecommerce-analytics-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.ecommerceanalyticsapp",
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    MIXPANEL_API_KEY: process.env.MIXPANEL_API_KEY,
    AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY,
    ADOBE_LAUNCH_KEY: process.env.ADOBE_LAUNCH_KEY,
    COLLECTOR_ENDPOINT: process.env.COLLECTOR_ENDPOINT,
    API_URL: process.env.API_URL,
    eas: {
      projectId: "1efcb6f9-f238-4021-8355-bd12011d89f8",
    },
  },
});

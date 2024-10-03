import { createTracker } from "@snowplow/react-native-tracker";
import Constants from "expo-constants";
import { trackerConfig } from "./tracker.config";

export const COLLECTOR_ENDPOINT =
  Constants.expoConfig?.extra?.COLLECTOR_ENDPOINT;

export const tracker = createTracker(
  "appTracker",
  {
    endpoint: COLLECTOR_ENDPOINT,
  },
  {
    trackerConfig: trackerConfig,
  },
);

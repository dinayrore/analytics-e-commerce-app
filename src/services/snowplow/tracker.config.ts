import { TrackerConfiguration } from "@snowplow/react-native-tracker";

export const trackerConfig: TrackerConfiguration = {
  appId: "e-commerce-app",
  devicePlatform: "app",
  base64Encoding: true,
  logLevel: "off",
  applicationContext: true,
  platformContext: true,
  geoLocationContext: true,
  sessionContext: true,
  deepLinkContext: true,
  screenContext: true,
  screenViewAutotracking: false,
  lifecycleAutotracking: false,
  installAutotracking: true,
  exceptionAutotracking: true,
  diagnosticAutotracking: false,
  userAnonymisation: false,
};

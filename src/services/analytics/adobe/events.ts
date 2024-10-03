import { MobileCore } from "@adobe/react-native-aepcore";
import { AdobeEventTrigger } from "./constants";

/**
 * Send a trackAction event to Adobe
 * @param action - "Custom Error"
 * @param contextData - { "rnza.loggedIn": "true", "rnza.errorCode": "404",
 * "rnza.errorType": "Page Not Found", "rnza.triggerLocation": "Products Screen"}
 * @returns AdobeReturn<Result>
 */
export const sendAdobeTrackAction = (
  action: AdobeEventTrigger,
  contextData: Record<string, string>,
) => {
  return MobileCore.trackAction(action, contextData);
};

/**
 * Send a trackState "page view" to Adobe
 * @param action - "Custom Error"
 * @param contextData - { "rnza.loggedIn": "true", "rnza.errorCode": "404",
 * "rnza.errorType": "Page Not Found", "rnza.triggerLocation": "Products Screen"}
 * @returns AdobeReturn<Result>
 */
export const sendAdobeTrackState = (
  state: AdobeEventTrigger,
  contextData: Record<string, string>,
) => {
  return MobileCore.trackState(state, contextData);
};

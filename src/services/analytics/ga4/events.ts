import analytics from "@react-native-firebase/analytics";
import { GA4EventTrigger } from "./constants";
import {
  GA4ErrorEvent,
  GA4ProductsEvent,
  GA4AuthEvent,
  GA4LogoutEvent,
} from "services/data-layer/ga4/types";

/**
 * Send an event to GA4
 * @param trigger - "login"
 * @param event - { "login_method": "Email", "logged_in": true }
 * @returns Promise<void>
 */
export const sendGA4Event = async (
  trigger: GA4EventTrigger,
  event: GA4ProductsEvent | GA4AuthEvent | GA4ErrorEvent | GA4LogoutEvent,
) => {
  return await analytics().logEvent(trigger, event);
};

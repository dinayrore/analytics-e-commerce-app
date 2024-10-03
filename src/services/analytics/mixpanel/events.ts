import { Mixpanel } from "mixpanel-react-native";
import { MIXPANEL_API_KEY, MixpanelEventTrigger } from "./constants";
import {
  MixpanelViewItemListEvent,
  MixpanelAuthEvent,
  MixpanelErrorEvent,
  MixpanelViewCartEvent,
  MixpanelViewItemEvent,
} from "services/data-layer/mixpanel/types";

// Instantiate a new instance of Mixpanel
export const mixpanel = new Mixpanel(MIXPANEL_API_KEY, true);

/**
 * Send an event to Mixpanel
 * @param trigger - "Login"
 * @param event - { "Event Type": "Action", "Login Method": "Email" }
 * @returns void
 */
export const sendMixpanelEvent = (
  trigger: MixpanelEventTrigger,
  event:
    | MixpanelViewItemListEvent
    | MixpanelViewItemEvent
    | MixpanelAuthEvent
    | MixpanelErrorEvent
    | MixpanelViewCartEvent,
) => {
  return mixpanel.track(trigger, event);
};

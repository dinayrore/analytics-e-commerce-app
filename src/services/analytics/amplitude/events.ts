import { track } from "@amplitude/analytics-react-native";
import { AmplitudeEventTrigger } from "./constants";
import {
  AmplitudeViewItemListEvent,
  AmplitudeAuthEvent,
  AmplitudeErrorEvent,
  AmplitudeViewCartEvent,
  AmplitudeViewItemEvent,
} from "services/data-layer/amplitude/types";

/**
 * Send an event to Amplitude
 * @param trigger - "Login"
 * @param event - { "Event Type": "Action", "Logged In": true }
 * @returns AmplitudeReturn<Result>
 */
export const sendAmplitudeEvent = (
  trigger: AmplitudeEventTrigger,
  event:
    | AmplitudeViewItemListEvent
    | AmplitudeViewItemEvent
    | AmplitudeAuthEvent
    | AmplitudeErrorEvent
    | AmplitudeViewCartEvent,
) => {
  return track(trigger, event);
};

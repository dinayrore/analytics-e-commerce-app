/* istanbul ignore file */
import { EventContext } from "@snowplow/react-native-tracker";

export type SnowplowScreenViewEventProps = {
  name: string;
  id?: string;
  previousName?: string;
  context?: EventContext;
};

export type SnowplowExperimentDataProps = {
  experimentName: string;
  experimentId: string;
  variantAssigned: string;
  userId: string;
};

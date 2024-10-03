/**
 * The event type for analytic events outlined in the Spec Sheet.
 * Screen corresponds to a page view event.
 * Action corresponds to a user interaction event.
 * Error corresponds to an error event.
 */
export enum AnalyticEventType {
  screen = "Screen",
  action = "Action",
  error = "Error",
}

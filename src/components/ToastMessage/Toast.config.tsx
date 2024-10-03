/* istanbul ignore file */
import React from "react";
import { ToastConfig } from "react-native-toast-message";
import { ToastMessageHeader } from "./constants";
import ToastMessage from "./ToastMessage";

/**
 * Custom Toast messages for `react-native-toast-message` library
 */
export const toastConfig: ToastConfig = {
  showNavi: ({ props }) => (
    <ToastMessage
      heading={ToastMessageHeader.heading}
      bodyText={props.bodyText}
    />
  ),
};

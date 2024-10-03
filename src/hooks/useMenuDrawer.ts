import useAuth from "./useAuth";
import { useEffect } from "react";
import { useDrawerStatus } from "@react-navigation/drawer";
import { sendAnalyticsMenuViewedEvents } from "services/analytics/helpers";

const useMenuDrawer = () => {
  const { isAuthenticated } = useAuth();
  const isDrawerOpen = useDrawerStatus() === "open";

  useEffect(() => {
    if (isDrawerOpen) {
      sendAnalyticsMenuViewedEvents(isAuthenticated);
    }
  }, [isAuthenticated, isDrawerOpen]);
};

export default useMenuDrawer;

import { StatusBar, StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  bottomButtons: {
    position: "absolute",
    bottom: theme.spacing.giant,
    marginHorizontal: theme.spacing.lg,
    alignSelf: "center",
    width: "80%",
  },
});

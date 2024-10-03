import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginVertical: theme.spacing.xl,
  },
  title: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).heading,
  },
  bodyText: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).bodyText,
  },
  bottomButton: {
    alignSelf: "center",
    position: "absolute",
    bottom: theme.spacing.giant,
    width: "80%",
  },
});

import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    alignSelf: "center",
  },
  itemDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 1,
    width: "100%",
    justifyContent: "space-between",
    marginHorizontal: theme.spacing.sm,
  },

  title: {
    padding: theme.spacing.lg,
    textAlign: "center",
    ...theme.fonts({
      fontWeight: FontWeight.bold,
      color: theme.colors.turquoise,
    }).heading,
  },
  description: {
    padding: theme.spacing.lg,
    ...theme.fonts().bodyText,
  },
  buttonStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.emerald,
    marginVertical: theme.spacing.sm,
  },
  buttonTextStyle: {
    color: theme.colors.emerald,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.sm,
  },
  line: {
    width: theme.spacing.xs,
    height: theme.spacing.lg,
    backgroundColor: theme.colors.errorRed,
    borderRadius: theme.radius.sm,
    marginRight: theme.spacing.sm,
  },
  item: {
    ...theme.fonts().caption,
    marginRight: theme.spacing.md,
  },
});
